


export const setCountry = (list) => ({

    type: '[Countries] Set country',
    payload: list

})


export const setFilter = (element) => ({
    
    type:'[Countries] Set country by Name',
    payload: element

})


export const filterRegion = (regionSelected) => ({
    type: '[Countries] Filter region',
    payload: {regionSelected}
})