//const http = require('http') // Para Servidor2

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json()) // Para hacer el POST

/* Servidor3 con express */
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/222', (request, response) => {
  response.send('<h1>Hello World 222!</h1>')
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })