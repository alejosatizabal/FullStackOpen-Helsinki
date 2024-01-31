import personsService from '../services/persons'

const Persons = ({newFilter, persons, personsFiltrado, setPersons, setPersonsFiltrado}) => {

    //personsService.deleteP(1)

    const eliminarPersona = ({name, id}) => {
        if (window.confirm(`¿Seguro que desea eliminar a ${name}`)) {
            personsService
            .deleteP( id )
            .then(personaEliminada => {
                console.log('personaEliminada :>> ', personaEliminada);
                console.log('personaEliminada.id :>> ', personaEliminada.id);
                const personas = persons.filter(
                    person => person.id != personaEliminada.id
                )
                setPersons(personas)
                console.log('personas :>> ', personas);
                setPersonsFiltrado([])
            })
            
            /**
             personsService
            .create(noteObject)
             .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setPersonsFiltrado(persons.concat(returnedPerson))
            setNewNumber('')
          })
             */
          }
          
    }

    // persons={ (newFilter == '') ? persons : personsFiltrado }

        const mostrar = (newFilter == '') ? persons : personsFiltrado

    return(
        <div>
            {mostrar.map(persona => (
                <div key={persona.name}>
                    {persona.name}: {persona.number}
                    <button onClick={() => eliminarPersona(persona) }>delete</button>
                </div>
            ))}
        </div>
    )
}

export default Persons