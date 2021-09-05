import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "../actions/countries";
import { getCountries } from "../helpers/getCountries";




export const useFetchData = () =>{

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);


    useEffect(() => {

        getCountries()
            .then(list =>{
                    
                    dispatch(setCountry(list));
                    setLoading(true);

            });

            
    },[dispatch])

    

    

    return {countries,loading};
}