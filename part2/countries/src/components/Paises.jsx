
const Paises = ({ countriesShow, setCountriesShow, setBuscarPais }) => {

    const numPaises = countriesShow.length

    //console.log('numPaises (Paises) :>> ', numPaises);

    const mostrarPais = (pais) => {
        setCountriesShow([pais])
        setBuscarPais(pais.name.common)
    }

    if(1 < numPaises && numPaises <= 10){
        return (
            <div>
                {countriesShow.map(countrie => (
                    <div key={countrie.name.common}>
                        {countrie.name.common} <button onClick={() => mostrarPais(countrie)}>mostrar</button>
                    </div>
                ))}
            </div>
        )
    }else if(numPaises > 10){
        return(
            <p>Hay demasiados paises</p>
        )
    }else{
        return null
    }
}

export default Paises