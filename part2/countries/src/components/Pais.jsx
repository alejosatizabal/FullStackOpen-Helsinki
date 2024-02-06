
const Pais = ({ numPaises, countriesShow }) => {

    console.log('numPaises (Pais):>> ', numPaises);

    if(numPaises == 1){
        const unPais = countriesShow[0]
        console.log('unPais :>> ', unPais);
        
        console.log('idiomas: ', Object.values(unPais.languages))
        
        /*
            console.log('unPais.languages :>> ', 
            (unPais.languages).map(
                idioma => (idioma)
            ));
        */

        /*
        {unPais.languages.map(idioma => (
                    <div key={idioma}>
                        {idioma}
                    </div>
                ))}
        */

        const idiomas = Object.values(unPais.languages)

        

        return (
            <div>
                <h1>{unPais.name.common}</h1>
                <p>Capital: {unPais.capital}</p>
                <p>Área: {unPais.area}</p>
                <h3>Idiomas</h3>
                <ul>
                    {idiomas.map( idioma => (
                        <li>{idioma}</li>
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