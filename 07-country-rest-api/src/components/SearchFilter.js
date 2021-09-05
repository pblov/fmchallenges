import React from 'react'
import { Filter } from './Filter'
import { Search } from './Search'

export const SearchFilter = () => {

    
    return (
        <div className="d-flex containerTop ">
            <Search/>
            <Filter/>
        </div>
    )
}
