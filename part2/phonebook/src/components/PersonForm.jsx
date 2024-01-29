const PersonForm = ({newName, setNewName, newNumber, setNewNumber, setPersons, persons, setPersonsFiltrado}) => {

    const addPerson = (event) => {
        event.preventDefault()
    
        if( verificarUnico(newName) ){
          const noteObject = {
            name: newName,
            number: newNumber,
            //id: notes.length + 1,
          }
          setPersons(persons.concat(noteObject))
          setPersonsFiltrado(persons.concat(noteObject))
          setNewNumber('')
        }else{
          alert(`${newName} ya es encuentra en la lista telefonica`)
          setNewNumber('')
        }
        setNewName('')
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