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

  // useEffect(() => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/persons')
  //     .then(response => {
  //       setPersons( () => {
  //         const copy = response.data
  //         return copy
  //       })
  //     })
  //   }, [])
    useEffect(() => {
      console.log('effect trayendo con persons.js')
      personService
        .getAll()
        .then(initialPersons => {
          //setNotes(response.data)
          console.log('initialPersons :>> ', initialPersons);
          setPersons(initialPersons)
        })
      }, [])
      // console.log('render', notes.length, 'notes')

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

      <Persons persons={ (newFilter == '') ? persons : personsFiltrado } />

    </div>
  )
}

export default App