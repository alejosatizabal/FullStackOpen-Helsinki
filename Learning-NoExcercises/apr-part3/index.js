require('dotenv').config()
const express = require('express')
const app = express()

const Note = require('./models/note')

const cors = require('cors')
app.use(cors())

app.use(express.json()) // Para hacer el POST

app.use(express.static('dist')) // Para que el BackEnd redireccione a 'dist', el Front build

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.get('/favicon.ico', (req, res) => {
  res.sendFile('favicon.ico');
});

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})
app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
      response.json(notes)
    })
})

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
  .then(note => {
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))
  //.catch(error => {
    //console.log(error)
    //response.status(500).end()
    //response.status(400).send({ error: 'malformatted id' })

  //})
})

app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/notes', (request, response, next) => {
  const body = request.body

  // if (body.content === undefined) {
  //   return response.status(400).json({ error: 'content missing' })
  // }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save()
  .then(savedNote => {
    response.json(savedNote)
  })
  .catch(error => next(error))
})

app.put('/api/notes/:id', (request, response, next) => {
  //const body = request.body
  const { content, important } = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(
    request.params.id,
    //note, { new: true }
    { content, important },
    { new: true, runValidators: true, context: 'query' }
  )
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

// controlador de solicitudes con endpoint desconocido
app.use(unknownEndpoint)

// este debe ser el último middleware cargado
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })