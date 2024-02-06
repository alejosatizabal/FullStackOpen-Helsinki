import React, { useState, useEffect } from 'react'
//import './App.css'
import countriesService from './services/countries'
import Buscar from './components/Buscar'
import Pais from './components/Pais'
import Paises from './components/Paises'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ countriesShow, setCountriesShow ] = useState([])
  const [ buscarPais, setBuscarPais ] = useState('')

  useEffect(() => {
    //console('effect')
    countriesService
    .getAll()
    .then( initialCountries => {
      setCountries(initialCountries)
    })
  }, [])

  return (
    <div>
      <Buscar
        countries={countries}
        setCountriesShow={setCountriesShow}
        buscarPais={buscarPais}
        setBuscarPais={setBuscarPais}
      />
      <Pais
        countriesShow={countriesShow}
      />
      <Paises
        countriesShow={countriesShow}
        setCountriesShow={setCountriesShow}
        setBuscarPais={setBuscarPais}
      />
      </div>
  )
}

export default App
