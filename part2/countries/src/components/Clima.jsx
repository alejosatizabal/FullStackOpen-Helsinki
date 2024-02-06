import { useEffect, useState } from "react"
import countries from "../services/countries"

const Clima = ({latitud, longitud}) => {
    const [ datosClima, setDatosClima ] = useState(null)

    useEffect(() => {
        //console('effect')
        countries.apiClima(latitud, longitud)
        .then( algo => 
            //console.log('clima de esta capital ',algo),
            setDatosClima(algo)
        )
        .catch(error => {    null    })
    }, [])

    if(datosClima){
        return (
            <div>
                <p>Temperatura: {datosClima.main.temp} °C</p>
                <img src = {`https://openweathermap.org/img/wn/${datosClima.weather[0].icon}@2x.png`} />
                <p>Velocidad del viento: {datosClima.wind.speed} m/s</p>
            </div>
        )
    }else{
        return null
    }
}
export default Clima