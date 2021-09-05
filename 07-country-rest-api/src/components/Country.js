import React from 'react'
import { useHistory } from 'react-router-dom';
import slugify from '../../node_modules/slugify/slugify';

export const Country = ({name,flag,population,region,capital,alpha3Code}) => {


    const formatPopulation = (number) => {
        return new Intl.NumberFormat().format(number);
    }

    const history = useHistory();

    const handleClick = () => {

        history.push(`/country/${slugify(alpha3Code)}`);
    }



    return (
        <div className="card" onClick={handleClick}>

                                
                                <img className="card__img" src={flag} alt="img" />
                                <div className="card__content">
                                    <h3 className="card__name">{name}</h3>
                                    <p className="card__population"><span className="card__title">Population: </span>{formatPopulation(population)}</p>
                                    <p className="card__region"><span className="card__title">Region: </span>{region}</p>
                                    <p className="card__capital"><span className="card__title">Capital: </span>{capital} </p>
                                </div>
                          
        </div>  
    )
}
