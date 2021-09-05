import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailCountries } from './DetailCountries';
import { MetroSpinner } from 'react-spinners-kit';
export const Details = ({history}) => {


    const [loading, setLoading] = useState(false);
    
    const {id} = useParams();

  
 
    const DBcountry = useSelector(state => state.countries.find(item => item.code === id));
    const [dataCountry, setDataCountry] = useState(DBcountry);
 
    useEffect(() => {
       
        if(!dataCountry){
            fetch(`https://restcountries.eu/rest/v2/alpha/${id.toLowerCase()}`)
                .then((response) => response.json())
                .then((data) =>{
                    setDataCountry(data)
                    setTimeout(() => {
                        setLoading(true);
                    },100);
                  
                })
            
            
        }
       
    }, [dataCountry,id])

 

    const handleBack = () => {
        history.goBack();
    }

    return (
       
       <div className="vw">
           
           { (!loading) 
                    
                    ?  <div className="load">
                            <MetroSpinner color="var(--text)"/> 
                       </div>
                    
                        
                    :  <div className="containerTop ">

                            <button className="btnBack" onClick = {handleBack}>
                                <i className="fas fa-long-arrow-alt-left"></i> Back
                            </button>
                             <DetailCountries {...dataCountry} />
                        </div> 
             }

       </div>
        
    )
}
