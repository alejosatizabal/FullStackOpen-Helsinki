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
        <Part parts={props.parts.part1} numxparts={props.numxparts.exercises1}/>
        <Part parts={props.parts.part2} numxparts={props.numxparts.exercises2}/>
        <Part parts={props.parts.part3} numxparts={props.numxparts.exercises3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.parts}, exercises {props.numxparts}</p>
    </div>
  )
}

const Total = (props) => {
console.log(props)
//console.log(props.numxparts)
    const totalExercises = props.numxparts.exercises1+props.numxparts.exercises2+props.numxparts.exercises3
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
        <Total numxparts={numxparts}/>
    </div>
  )
}

export default App
