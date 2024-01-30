import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  /*  { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])*/
  const [ personsFiltrado, setPersonsFiltrado ] = useState(persons)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        //console.log('promise fulfilled')
        //console.log("response.data: ", response.data);
        //setPersons(response.data)
        setPersons( () => {
          const copy = response.data
          return copy
        })
        setPersonsFiltrado( () => {
          const copy = response.data
          return copy
        })
        //console.log("persons: ",persons);
      })
    }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        value={newFilter}
        setNewFilter={setNewFilter}
        setPersonsFiltrado={setPersonsFiltrado}
        persons={persons}
      />

      <h2>Adicionar nueva persona</h2>

      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setPersons={setPersons}
        persons={persons}
        setNewNumber={setNewNumber}
        setPersonsFiltrado={setPersonsFiltrado}
      />

      <h2>Numbers</h2>

      <Persons persons={personsFiltrado} />

    </div>
  )
}

export default App