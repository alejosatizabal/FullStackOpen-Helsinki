import personsService from '../services/persons'

const Persons = ({newFilter, persons, personsFiltrado, setPersons, setPersonsFiltrado}) => {

    const eliminarPersona = ({name, id}) => {
        if (window.confirm(`¿Seguro que desea eliminar a ${name}?`)) {
            personsService
            .deleteP( id )
            .then(personaEliminada => {
                console.log('personaEliminada FrontEnd :>> ', personaEliminada);
                const personas = persons.filter(
                    person => person.id != personaEliminada.id
                )
                setPersons(personas)
                setPersonsFiltrado(
                    personsFiltrado.filter(
                        personsFiltrado => personsFiltrado.id != personaEliminada.id
                ))
            })
        }  
    }
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