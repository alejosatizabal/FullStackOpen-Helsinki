
const Pais = ({ countriesShow }) => {

    if(countriesShow.length == 1){
        console.log('countriesShow (Pais):>> ', countriesShow);
        const unPais = countriesShow[0]
        console.log('unPais :>> ', unPais);

        const idiomas = Object.values(unPais.languages)

        return (
            <div>
                <h1>{unPais.name.common}</h1>
                <p>Capital: {unPais.capital}</p>
                <p>Área: {unPais.area}</p>
                <h3>Idiomas</h3>
                <ul>
                    {idiomas.map( idioma => (
                        <li key={idioma}>{idioma}</li>
                    )
                    )}
                </ul>
                <img src={unPais.flags.png}/>
            </div>
        )
    }
    return null    
}

export default Pais