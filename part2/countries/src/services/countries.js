import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/all'

const baseClima = 'https://api.openweathermap.org/data/2.5/weather?lat='
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const consoleLog = false
const APIkey = import.meta.env.VITE_API_KEY

const getAll = () => {
    //return axios.get(baseUrl)
    consoleLog ? console.log('countries.js: getAll') : null
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const apiClima = (latitud, longitud) => {
    //return axios.get(baseUrl)
    consoleLog ? console.log('countries.js: apiClima') : null
    const request = axios.get(
        `${baseClima}${latitud}&lon=${longitud}&appid=${APIkey}&units=metric`
    )
    return request.then(response => response.data)
}
export default { getAll, apiClima }