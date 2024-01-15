const Header = (props) => {
  return (
    <div>
      <h1>Name Course: {props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <h1>Parts:</h1>
        <ol>
            <li>{props.parts.part1}, {props.numxparts.exercises1} excercises</li>
            <li>{props.parts.part2}, {props.numxparts.exercises2} excercises</li>
            <li>{props.parts.part3}, {props.numxparts.exercises3} excercises</li>
        </ol>
    </div>
  )
}

const Total = (props) => {

    const totalExercises = props.numExers1 + props.numExers2 + props.numExers3
  return (
    <div>
      <h1>Number of exercises: {totalExercises}</h1>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

    var parts = {part1,part2,part3}
    var numxparts = {exercises1,exercises2,exercises3}

  return (
    <div>
        <Header course={course}/>
        <Content parts={parts} numxparts={numxparts}/>
        <Total numExers1={exercises1} numExers2={exercises2} numExers3={exercises3}/>
    </div>
  )
}

export default App
