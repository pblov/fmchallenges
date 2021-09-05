import React from 'react';
import { Link } from 'react-router-dom';


export const Header = ({setDarkMode,darkMode}) => {

    const handleTheme = () => {
        setDarkMode(!darkMode);
        
    }

    return (
        <div className="headerBg ">
            <div className="header containerTop">

                <Link to="/" className="header__title"> Where in the world?</Link>
  
        

                
                    {(darkMode) 
                        ? <div className="header__mode" onClick={handleTheme}>
                                <i className="fas fa-moon header__icon" style={{fontSize:'13px'}}></i>
                                <span>Dark Mode</span>
                          </div>
                        
                        : <div className="header__mode" onClick={handleTheme}>
                                <i className="fas fa-sun header__icon"></i>
                                <span>Light Mode</span>
                          </div>
                
                    }
            </div>
        </div>
        
    )
}
