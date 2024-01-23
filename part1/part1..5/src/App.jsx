const Header = (props) => {
  return (
    <div>
      <h1>Name Course: {props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <h1>Parts:</h1>
        <Part part={props.course.parts[0].name} numxpart={props.course.parts[0].exercises} />
        <Part part={props.course.parts[1].name} numxpart={props.course.parts[1].exercises} />
        <Part part={props.course.parts[2].name} numxpart={props.course.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part}, exercises {props.numxpart}</p>
    </div>
  )
}

const Total = (props) => {
console.log(props)
    const totalExercises =  props.course.parts[0].exercises +
                            props.course.parts[1].exercises +
                            props.course.parts[2].exercises
  return (
    <div>
      <h1>Number of exercises: {totalExercises}</h1>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
    </div>
  )
}

export default App
