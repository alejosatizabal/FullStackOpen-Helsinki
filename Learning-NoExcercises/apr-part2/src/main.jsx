//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

//ReactDOM.createRoot(document.getElementById('root')).render( <App /> )

import React from 'react'
import ReactDOM from "react-dom/client"
import App from './App'
import './index.css'
//import './indexOri.css'

/*
import axios from 'axios'
const promise = axios.get('http://localhost:3001/notes')
console.log(promise)
promise.then(response => {
  console.log(response)
})
*/

// Otra forma de la anterior promesa, no es necesaria 'const promise'
/*
axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })
*/

// Promesa a dirección inexitente
//const promise2 = axios.get('http://localhost:3001/foobar')
//console.log(promise2)

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]

//ReactDOM.render(<App notes={notes} />, document.getElementById('root'))
/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <App notes={notes} />
)
*/

//ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
)