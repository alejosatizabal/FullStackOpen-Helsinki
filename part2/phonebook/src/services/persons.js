import axios from 'axios'
//const baseUrl = 'http://localhost:3001/persons' // Usando json-server
//const baseUrl = 'http://localhost:3001/api/persons' // Funcionando con BackEnd Local
const baseUrl = '/api/persons' // Para desplegar en Render.com
const consoleLog = false

const getAll = () => {
  //return axios.get(baseUrl)
  consoleLog ? console.log('persons.js: getAll') : null
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  //return axios.post(baseUrl, newObject)
  consoleLog ? console.log('persons.js: create') : null
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  //return axios.put(`${baseUrl}/${id}`, newObject)
  consoleLog ? console.log('persons.js: update') : null
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteP = (id) => {
  //return axios.put(`${baseUrl}/${id}`, newObject)
  consoleLog ? console.log('persons.js: delete') : null
  const request = axios.delete(`${baseUrl}/${id}`)
  //const temp = request.then(response => (response.data, console.log(response.data.id)))
  //console.log( temp );
  return request.then(response => response.data)
}

// Ambas formas de exportar son válidas
 export default { getAll, create, update, deleteP }
// export default { getAll: getAll, create: create,  update: update, deleteP: deleteP }