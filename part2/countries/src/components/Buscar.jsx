
const Buscar = ({ countries, setCountriesShow, buscarPais, setBuscarPais }) => {

    const handleFilterChange = (event) => {
        setBuscarPais(event.target.value)
        if( event.target.value != ''){
            setCountriesShow(paises =>{
                const copy = filtrar(event.target.value)
                return copy
            })
        }else{
            setCountriesShow([])
        }
    }

    const filtrar = (entrada) =>{
        return countries.filter( (country) => ((country.name.common).toLocaleLowerCase()).includes( entrada.toLocaleLowerCase() ) )
    }

    return (
        <div>
            <form>
            <div>
            Encontrar paises <input value={buscarPais} onChange={handleFilterChange} />
            </div>
      </form>
        </div>
    )
}

export default Buscar