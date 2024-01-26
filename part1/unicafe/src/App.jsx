import { useState } from 'react';

const Titulos = (props) => {
  return(
    <h1>{props.titulo}</h1>
  )
}

const Estadisticas = (props) => {
  return(
    <div>
      <div>Good: { props.resenas.good }</div>
      <div>Neutral: { props.resenas.neutral }</div>
      <div>Bad: { props.resenas.bad }</div>
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