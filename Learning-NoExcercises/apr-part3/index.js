//const http = require('http') // Para Servidor2

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json()) // Para hacer el POST

app.use(express.static('dist')) // Para que el BackEnd redireccione a 'dist', el Front build



/* Servidor1 Básico - Hola mundo*/
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' })
//   response.end('Hello World')
// })

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/favicon.ico', (req, res) => {
  //res.sendStatus(404);
  //console.log('favicon.ico OK')
  //res.sendStatus(200);
  //res.send('Prueba')
  res.sendFile('favicon.ico');
});

/* Servidor2 sin express */
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' })
//   response.end(JSON.stringify(notes))
// })

/* Servidor3 con express */
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})
app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log('id :>> ', id);

  const note = notes.find(note => note.id === id)
  // const note = notes.find(note => {
  //   console.log(note.id, typeof note.id, id, typeof id, note.id === id)
  //   return note.id === id
  // })

  if (note) {
    response.json(note)
  } else {
    // Dado que no se adjuntan datos a la respuesta, utilizamos
    // el método status para establecer el estado y el método end para
    // responder a la solicitud sin enviar ningún dato.
    response.status(404).end()
  }

  //console.log('note :>> ', note);
  //response.json(note)
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

// app.post('/api/notes', (request, response) => {
//   const note = request.body
//   console.log('note: ', note)
//   response.json(note)
// })

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

//const PORT = 3001 // Se usa para localhost
const PORT = process.env.PORT || 3001 // Para desplegar en Internet

/* Con servidor2 - sin express, aunque funciona con Servidor3 */
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)

/* Con Servidor3 - Express */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })