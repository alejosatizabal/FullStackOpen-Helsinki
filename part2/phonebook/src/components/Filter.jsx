const Filter = ({value, setNewFilter, setPersonsFiltrado, persons}) => {

    //console.log("persons(Filter): ", persons);

    const handleFilterChange = (event) => {
        //console.log(event.target.value)
        if( true ){
            setNewFilter(event.target.value)
            setPersonsFiltrado(personas =>{
            const copy = filtrar(event.target.value)
            // console.log(copy);
            return copy
            })
        }else{
            
        }
    }

    const filtrar = (entrada) =>{
        //setPersons( persons.filter( (persona) => ((persona.name).toLocaleLowerCase()).includes( entrada.toLocaleLowerCase() ) ) )
        return persons.filter( (persona) => ((persona.name).toLocaleLowerCase()).includes( entrada.toLocaleLowerCase() ) )
    }

    return(
        <form>
            <div>
            Filtrar lista de personas <input value={value} onChange={handleFilterChange} />
            </div>
      </form>
    )
}

export default Filter