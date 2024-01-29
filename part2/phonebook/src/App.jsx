import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ personsFiltrado, setPersonsFiltrado ] = useState(persons)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [mostrarFiltrado, setNewMostrarFiltrado] = useState(false)

  const addPerson = (event) => {
    event.preventDefault()

    if( verificarUnico(newName) ){
      const noteObject = {
        name: newName,
        number: newNumber,
        //id: notes.length + 1,
      }
      setPersons(persons.concat(noteObject))
      setNewNumber('')
    }else{
      alert(`${newName} ya es encuentra en la lista telefonica`)
    }
    setNewName('')
  }

  //console.log( persons.map(person => person.name) );
  //console.log( (persons.map(person => person.name)).includes('Hola') );

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
    }

    )
  }

  const filtrar = (entrada) =>{
    //setPersons( persons.filter( (persona) => ((persona.name).toLocaleLowerCase()).includes( entrada.toLocaleLowerCase() ) ) )
    return persons.filter( (persona) => ((persona.name).toLocaleLowerCase()).includes( entrada.toLocaleLowerCase() ) )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Filtrar lista de personas <input value={newFilter} onChange={handleFilterChange} />
        </div>
      </form>
      <h2>Adicionar nueva persona</h2>
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
      <h2>Numbers</h2>
      {personsFiltrado.map(
        persona => (
          <div key={persona.name}>{persona.name}: {persona.number}</div>
        )
      )}

      {/* TEMPORAL */}
      <div>debug: {newName}</div>
    </div>
  )
}

export default App