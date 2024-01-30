import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

//const App = ({ notes }) => {
const App = () => {
  const [notes, setNotes] = useState([])

  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    // console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        // console.log('promise fulfilled')
        setNotes(response.data)
      })
    }, [])
    // console.log('render', notes.length, 'notes')

    const addNote = (event) => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        important: Math.random() > 0.5,
        id: notes.length + 1,
      }

      axios
        .post('http://localhost:3001/notes', noteObject)
        .then(response => {
          console.log(response)
          setNotes(notes.concat(response.data))
          setNewNote('')
        })
  
      //setNotes(notes.concat(noteObject))
      //setNewNote('')
    }
  
    const handleNoteChange = (event) => {
      setNewNote(event.target.value)
    }

    const toggleImportanceOf = (id) => {
      //console.log('importance of ' + id + ' needs to be toggled')
      const url = `http://localhost:3001/notes/${id}`
      console.log('url :>> ', url);
      const note = notes.find(n => n.id === id)
      console.log('note :>> ', note);
      const changedNote = { ...note, important: !note.important }
      console.log('changedNote :>> ', changedNote);

      axios.put(url, changedNote).then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      })
    }
  
    const notesToShow = showAll
      ? notes
      : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        <ul>
          {notesToShow.map(note => 
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          )}
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App