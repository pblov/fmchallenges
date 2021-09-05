

export const getCountries = async() => {

    const url = 'https://restcountries.eu/rest/v2/all';
    const resp = await fetch(url);
    const data = await resp.json();
    const countries = data.map ( country => {

        return{
            name:country.name,
            nativeName:country.nativeName,
            population:country.population,
            region:country.region,
            subregion:country.subregion,
            capital:country.capital,
            topLevelDomain:country.topLevelDomain,
            currencies:country.currencies,
            languages:country.languages,
            borders:country.borders,
            flag:country.flag,
            alpha3Code:country.alpha3Code

        }

    })


    return countries;

}