import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/all'
const consoleLog = true

const getAll = () => {
    //return axios.get(baseUrl)
    consoleLog ? console.log('persons.js: getAll') : null
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

  export default { getAll }