import { useState } from 'react';

const Titulos = (props) => {
  return(
    <h1>{props.titulo}</h1>
  )
}

  /*
    Amplía tu aplicación para que muestre más estadísticas sobre los comentarios
    recopilados: el número total de comentarios recopilados, la puntuación
    promedio (buena: 1, neutral: 0, mala: -1) y el porcentaje de comentarios positivos.
  */

    // 1.8: unicafe, paso 3 (listo, desde un principio se hizo así)

const Estadisticas = (props) => {

  let totalComentarios = props.resenas.good + props.resenas.neutral + props.resenas.bad
  let puntPromedio = (props.resenas.good*1 + props.resenas.bad*-1) / totalComentarios
  let porcenPositivos = (props.resenas.good / totalComentarios) *100

  //console.log("Total: " + totalComentarios)

  if (totalComentarios > 0){
    return(
      <div>
        <StatisticLine text="Good" value={ props.resenas.good } />
        <StatisticLine text="Neutral" value={ props.resenas.neutral } />
        <StatisticLine text="Bad" value={ props.resenas.bad } />
        <StatisticLine text="Total de comentarios" value={ totalComentarios } />
        <StatisticLine text="Puntuación promedio" value={ puntPromedio } />
        <StatisticLine text="% comentarios positivos" value={ porcenPositivos } simbolo=" %"/>
      </div>
    )
  }

  return(
    <div>Sin estadisticas todavía</div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  //text
  //value
  return(
    <div>{props.text}: {props.value} {props.simbolo}</div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Titulos titulo="Give Feedback" />
      <Button handleClick={() => setGood(good+1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
      <Button handleClick={() => setBad(bad+1)} text="Bad" />
      <Titulos titulo="Statistics" />
      <Estadisticas resenas={{good, neutral, bad}} />
    </div>
  )
}

export default App