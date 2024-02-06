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
  const [ numPaises, setNumPaises ] = useState(0)

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
        setNumPaises={setNumPaises}
      />
      <Pais
        numPaises={numPaises}
        countriesShow={countriesShow}
      />
      <Paises
        numPaises={numPaises}
        countriesShow={countriesShow}
      />
      </div>
  )
}

export default App
