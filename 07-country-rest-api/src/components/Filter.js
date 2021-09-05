import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterRegion } from '../actions/countries';

export const Filter = () => {


    const dispatch = useDispatch();
    const filterByRegion = useSelector(state => state.filterByRegion);


    const [dropdown, setDropdown] = useState(false);

     const handleDropdown = () =>{
         setDropdown(!dropdown);
     }

     const onRegionChange = (e) => {
        dispatch(filterRegion(e));
     }  


    return (


        <div className = {`${dropdown?'dropdown open':'dropdown'}`}  onClick={ handleDropdown } >

            <div className="filterRegion">
            {
                (!filterByRegion) ? <span>Filter by Region</span> : <span>{filterByRegion}</span>
            } 
            <i className={`${dropdown?'fas fa-chevron-down':'fas fa-chevron-up'}`}></i>
            </div>
            
            <ul>
                <li onClick={() => onRegionChange('Filter by Region')}> All</li>
                <li onClick={() => onRegionChange('Africa')}> Africa</li>
                <li onClick={() => onRegionChange('Americas')}> Americas</li>
                <li onClick={() => onRegionChange('Asia')}> Asia</li>
                <li onClick={() => onRegionChange('Europe')}> Europe</li>
                <li onClick={() => onRegionChange('Oceania')}> Oceania</li>
            </ul>
        </div>

        
    )
}
