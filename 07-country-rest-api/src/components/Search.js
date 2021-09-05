import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../actions/countries';




export const Search = () => {


    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const filterByName = (e) => {

        const value = e.target.value;
        setInputValue(value);
        dispatch(setFilter(value));
    }

    const clearButton = () => {

        dispatch(setFilter(''));
        setInputValue('');
    }
    



    return (

     

        <div className="search">
           
            <i className="search__icon fas fa-search"></i>
            <input search={inputValue} className="search__input" autoComplete="off" value={inputValue} onChange={filterByName} type="text" placeholder="Search for a country..."/>
            {
                inputValue && <i className="search__delete fas fa-times" onClick={clearButton}></i>
            }
        </div>

    

    )
}
