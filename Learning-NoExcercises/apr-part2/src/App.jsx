import React from 'react'
import Note from './components/Note'

const App = ({ notes }) => {
  return (
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
  )
}

export default App