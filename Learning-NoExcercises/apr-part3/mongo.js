/*
    Se hace la conexión de la siguiente manera desde la terminal de este proyecto
        node mongo.js 0GzKyVBkn3xfruvQ

        donde '0GzKyVBkn3xfruvQ' es la contraseña de la colección 'alejandrosatizabal'
*/

const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  //`mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`

  // Crea colección con nombre por defecto 'test'
  //`mongodb+srv://alejandrosatizabal:${password}@cluster0.a1pvrnk.mongodb.net/?retryWrites=true&w=majority`

  // Crea colección con nombre 'noteApp'
  `mongodb+srv://alejandrosatizabal:${password}@cluster0.a1pvrnk.mongodb.net/noteApp?retryWrites=true&w=majority`



mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})