import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import React from 'react'
import ReactDOM from 'react-dom'

//const Note = ({ note }) => {  return <li>{note.content}</li>}

function App() {
  const [count, setCount] = useState(0)

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

  const result = notes.map(note => note.id)
  console.log(result)

  return (
    <>
      <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
        {notes.map(
          note => (
            <li key={note.id}>{note.content}</li>
        ))}
        {/* La siguiente forma de pasar el indice no se recomienda */}
        {notes.map(
          (note, i) => (
            <li key={i}>{note.content}</li>
        ))}
        {notes.map(
          note => (
            <Note key={note.id} note={note} />
          ))}
      </ul>
    </div>  
    </>
  )
}

export default App
