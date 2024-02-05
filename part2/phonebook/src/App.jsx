import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ personsFiltrado, setPersonsFiltrado ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [tipoMensaje, setTipoMensaje] = useState('')
  const [ mensaje, setMensaje] = useState('')

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

      <Notification tipoMensaje={tipoMensaje} message={mensaje} />

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
        setMensaje={setMensaje}
        setTipoMensaje={setTipoMensaje}
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