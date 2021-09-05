
const initialState = {
    countries:[],
    countriesByName:[],
    data:true,
    countriesFilteredByRegion:[],
    filterByRegion:''
}



export const countryReducer = (state = initialState, action) => {


    switch (action.type){

        case '[Countries] Set country':
            
                 return {...state, countries:action.payload}


        case '[Countries] Set country by Name':


               let list;
               if(state.filterByRegion !== ''){
                   list = state.countriesFilteredByRegion;
               }else{
                
                   list = state.countries;
               }

         
               const countriesByName =  list.filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()));        
               
               
               (countriesByName.length === 0) ? state.data = false : state.data = true;

              

    
               return{...state, countriesByName}
               

               

        case '[Countries] Filter region':

            const {regionSelected} = action.payload;

            if('' === regionSelected || regionSelected === 'Filter by Region') {


                return {...state, countriesFilteredByRegion:[], filterByRegion:''}
            };

            const countriesFilteredByRegion = state.countries.filter((country) => country.region === regionSelected);


            return {...state, countriesFilteredByRegion, filterByRegion:regionSelected}



            
        default: return state;

        
    }

}