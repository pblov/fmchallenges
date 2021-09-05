import React from 'react';



export const DetailCountries = ({name,flag,subregion,region,capital,currencies = [],languages=[],borders=[],nativeName,population,topLevelDomain}) => {
  
    const formatPopulation = (number) => {
        return new Intl.NumberFormat().format(number);
    }

    return (
           
            <div className="details">
                <div>
                     <img className="details__img" src={flag} alt={name} />
                </div>
               
                <div className="details__data">
                    <h1 className="details__name">{name}</h1>
                    <div className="details__list">
                        <div>
                            <p><b className="details__title">Native Name:</b> {nativeName}</p>
                            <p><b className="details__title">Population:</b> {formatPopulation(population)}</p>
                            <p><b className="details__title">Region:</b> {region}</p>
                            <p><b className="details__title">Sub Region:</b> {subregion}</p>
                            <p><b className="details__title">Capital:</b> {capital}</p>
                        </div>

                        <div>
                            <p><b className="details__title">Top Level Domain:</b> {topLevelDomain}</p>
                            <p><b className="details__title">Currencies:</b> {currencies.map((item,i) => <span key={i}>{item.name}</span>)}</p>
                            <p><b className="details__title">Languages:</b> {languages.map((item,i)=> <span key={i}>{item.name} </span> )}</p>
                        </div>
                    </div>
                    

                    <div className="borders">
                        <b className="borders__title" style={{marginRight:'20px'}}>Border Countries:</b> 
                        <ul className="borders__list">
                            {borders.map((item,i)=> ( <a  className="btnBorder" key={i} href={`/country/${item}`}> {item} </a> ) )}
                        </ul>
                    </div>


                </div>
            </div>
          
        
    )
}
