import axios from 'axios'
//const baseUrl = 'http://localhost:3001/notes' // Con Json-server
//const baseUrl = 'http://localhost:3001/api/notes' // Con BackEnd Salen
const baseUrl = '/api/notes' // Cuando tengo Back y Front en la misma carpeta, para desplegarlos

const getAll = () => {
  //return axios.get(baseUrl)
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  //return axios.post(baseUrl, newObject)
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  //return axios.put(`${baseUrl}/${id}`, newObject)
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// Ambas formas de exportar son válidas
 export default { getAll, create, update }
// export default { getAll: getAll, create: create,  update: update }