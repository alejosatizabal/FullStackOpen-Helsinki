const Filter = ({value, setNewFilter, setPersonsFiltrado, persons}) => {

    const handleFilterChange = (event) => {
        //console.log(event.target.value),
        setNewFilter(event.target.value)
        //console.log( persons.filter( (persona) => ((persona.name).toLocaleLowerCase()).includes( newFilter.toLocaleLowerCase() ) ) ); //  
        //setPersons( persons.filter( (persona) => ((persona.name).toLocaleLowerCase()).includes( newFilter.toLocaleLowerCase() ) ) )
        //setPersons( persons.filter( (persona) => ((persona.name).toLocaleLowerCase()).includes( (event.target.value).toLocaleLowerCase() ) ) )
        //filtrar(event.target.value)
        setPersonsFiltrado(personas =>{
          const copy = filtrar(event.target.value)
          console.log(copy);
          return copy
        })
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