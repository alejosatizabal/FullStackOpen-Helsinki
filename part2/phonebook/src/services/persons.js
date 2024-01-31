import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  //return axios.get(baseUrl)
  console.log('persons: getAll');
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  //return axios.post(baseUrl, newObject)
  console.log('persons: create');
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  //return axios.put(`${baseUrl}/${id}`, newObject)
  console.log('persons: update');
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteP = (id) => {
  //return axios.put(`${baseUrl}/${id}`, newObject)
  console.log('persons: delete');
  const request = axios.delete(`${baseUrl}/${id}`)
  //const temp = request.then(response => (response.data, console.log(response.data.id)))
  //console.log( temp );
  return request.then(response => response.data)
}

// Ambas formas de exportar son válidas
 export default { getAll, create, update, deleteP }
// export default { getAll: getAll, create: create,  update: update, deleteP: deleteP }