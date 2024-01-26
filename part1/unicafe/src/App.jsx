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

  return(
    <div>
      <div>Good: { props.resenas.good }</div>
      <div>Neutral: { props.resenas.neutral }</div>
      <div>Bad: { props.resenas.bad }</div>
      <div>Total de comentarios: {totalComentarios}</div>
      <div>Puntuación promedio: {puntPromedio}</div>
      <div>% comentarios positivos: {porcenPositivos} %</div>
  </div>
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
      <button onClick={() => setGood(good+1)}>Good</button>
      <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
      <button onClick={() => setBad(bad+1)}>Bad</button>
      <Titulos titulo="Statistics" />
      <Estadisticas resenas={{good, neutral, bad}} />
    </div>
  )
}

export default App