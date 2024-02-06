import { useEffect, useState } from "react";
import countries from "../services/countries";
import Clima from "./Clima";

const Pais = ({ countriesShow }) => {

    if(countriesShow.length == 1){
        const unPais = countriesShow[0]
        const idiomas = Object.values(unPais.languages)

        return (
            <div>
                <h1>{unPais.name.common}</h1>
                <p>Capital: {unPais.capital}</p>
                <p>Área: {unPais.area}</p>
                <h3>Idiomas</h3>
                <ul>
                    {idiomas.map( idioma => (
                        <li key={idioma}>{idioma}</li>
                    )
                    )}
                </ul>
                <img src={unPais.flags.png}/>
                <h2>Clima en {unPais.capital}</h2>
                <Clima
                    latitud={unPais.capitalInfo.latlng[0]}
                    longitud={unPais.capitalInfo.latlng[1]}
                />
            </div>
        )
    }
    return null    
}

export default Pais