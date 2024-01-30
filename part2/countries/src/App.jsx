import React, { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    //console('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        //console('promise fulfilled')
        //console("response.data: ", response.data);
        //setPersons(response.data)
        setCountries( () => {
          const copy = response.data
          return copy
        })
        //console("countries: ", countries);
      })
    }, [])

    //console("countries: ", countries);

  return (
    <div>
      {countries.map(countrie => (
        <div key={countrie.name.common}>
          {countrie.name.common} ___ {countrie.name.official}
        </div>))}
      </div>
  )
}

export default App
