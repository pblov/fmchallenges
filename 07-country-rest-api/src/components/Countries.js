import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchData } from '../hooks/useFetchData';
import { Country } from './Country';
import { MetroSpinner } from 'react-spinners-kit';

export const Countries = () => {


    
    const {loading} = useFetchData();


    const data = useSelector(state => state.data);
    const countriesByName = useSelector((state) => state.countriesByName);
    const countries = useSelector((state) => {


        if (state.filterByRegion !== '' && countriesByName.length === 0) {
            return state.countriesFilteredByRegion;
        }


        if(countriesByName.length > 0){
           
            return countriesByName;
        }

        return state.countries;

    });

    
 

    return (
        
        <>

       
        
            {
                (!loading) 
                            ? <div className="load">
                                    <MetroSpinner color="var(--text)"/> 
                              </div>
                              
                            :  <div className="container card-container"> 

                                            {
                                                (!data) && <p className="noMatch">No match data</p>
                                            }

                                            { 

                                                    (data) &&
                                                    countries.map((cont,i) => 


                                                            <Country
                                                            flag={cont.flag} 
                                                            img={cont.img}
                                                            name={cont.name}
                                                            population={cont.population}
                                                            region={cont.region}
                                                            capital={cont.capital}
                                                            alpha3Code={cont.alpha3Code}
                                                            key={i}
                                                            
                                                            
                                                            
                                                            />
                                                        

                                                        
                                                    )
                                            }
                                 </div>
            }


            </>
           
        
    )

   
}
