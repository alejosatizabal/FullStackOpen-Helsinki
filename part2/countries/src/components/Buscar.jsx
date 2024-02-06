
const Buscar = ({ countries, setCountriesShow, buscarPais, setBuscarPais, setNumPaises }) => {

    const handleFilterChange = (event) => {
        //console.log(event.target.value)
        setBuscarPais(event.target.value)
        setCountriesShow(paises =>{
            const copy = filtrar(event.target.value)
            // console.log(copy);
            event.target.value == '' ? setNumPaises(0) : setNumPaises(copy.length)
            return copy
        })
    }

    const filtrar = (entrada) =>{
        //setPersons( persons.filter( (persona) => ((persona.name).toLocaleLowerCase()).includes( entrada.toLocaleLowerCase() ) ) )
        return countries.filter( (country) => ((country.name.common).toLocaleLowerCase()).includes( entrada.toLocaleLowerCase() ) )
    }

    return (
        <div>
            <form>
            <div>
            Encontrar paises <input /*value={value}*/ onChange={handleFilterChange} />
            </div>
      </form>
        </div>
    )
}

export default Buscar