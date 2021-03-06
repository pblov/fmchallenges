import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom'
import { Countries } from './components/Countries'
import { Country } from './components/Country'
import { Details } from './components/Details'
import { Header } from './components/Header'
import { SearchFilter } from './components/SearchFilter'
import { store } from './store/store'




export const CountryRest = () => {
    

    const [darkMode, setDarkMode] = useState(false)
    const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'
  

  
    useEffect(() => {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      console.log(mq);
      setDarkMode(mq.matches)
    }, [])




    return (

        <main className={mainClass} >
            <Provider store={store}>
                <Router>
                    <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
                    <Switch>
                    <Redirect exact from="/" to="/country" />
                    
                        <Route path="/country/:id"  component={Details} />
                    
                        <Route  path="/country/" exact component={Country}  >
                            <SearchFilter/>
                            <Countries/>
                        </Route>
                        
                    </Switch>
                
                </Router>
                
            </Provider>
        </main>
        
     
        
        
        
        
    )
}
