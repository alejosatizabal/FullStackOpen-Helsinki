import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ personsFiltrado, setPersonsFiltrado ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

    useEffect(() => {
      personService
        .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
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
        persons={persons}
        setPersons={setPersons}
        setNewNumber={setNewNumber}
        personsFiltrado={personsFiltrado}
        setPersonsFiltrado={setPersonsFiltrado}
      />

      <h2>Numbers</h2>

      <Persons
        newFilter={newFilter}
        persons={persons}
        personsFiltrado={personsFiltrado}
        setPersons={setPersons}
        setPersonsFiltrado={setPersonsFiltrado}
      />

    </div>
  )
}

export default App