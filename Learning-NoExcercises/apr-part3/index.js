//const http = require('http') // Para Servidor2

const express = require('express')
const app = express()

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

const PORT = 3001

/* Con servidor2 - sin express, aunque funciona con Servidor3 */
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)

/* Con Servidor3 - Express */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })