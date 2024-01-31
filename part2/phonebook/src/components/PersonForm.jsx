import personsService from '../services/persons'

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, setPersons, persons, setPersonsFiltrado}) => {

    const addPerson = (event) => {
        event.preventDefault()
    
        if( verificarUnico(newName) ){
          // const noteObject = {
          //   name: newName,
          //   number: newNumber,
          //   //id: notes.length + 1,
          // }
          // setPersons(persons.concat(noteObject))
          // setPersonsFiltrado(persons.concat(noteObject))
          // setNewNumber('')

          const noteObject = {
            name: newName,
            number: newNumber,
          }
          personsService
          .create(noteObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setPersonsFiltrado(persons.concat(returnedPerson))
            setNewNumber('')
          })
        }else{
          alert(`${newName} ya es encuentra en la lista telefonica`)
          setNewNumber('')
        }
        setNewName('')
    }
    const addNote = (event) => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        important: Math.random() > 0.5,
      }
      noteService
        .create(noteObject)
        .then(returnedNote => {
          setNotes(notes.concat(returnedNote))
          setNewNote('')
        })
    }

    const verificarUnico = (nombreIngresado) => {
        return !((persons.map(person => person.name)).includes(nombreIngresado))
    }

    const handleNameChange = (event) => {
        //console.log(event.target.value),
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        //console.log(event.target.value),
        setNewNumber(event.target.value)
    }

    return(
        <form  onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm