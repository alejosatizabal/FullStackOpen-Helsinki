const Hello = (props) => {
    console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} year old</p>
        <p> Apellido: {props.apellido}</p>
    </div>
  )
}

const App = () => {

    const name = 'Peter'
    const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='George'/>
      <Hello name='Daisy'/>
      <Hello name={name} age={age}/>
      <Hello name='Maya' age={26+5}/>
      <Hello name='Paulina' age='29' apellido='Castillo'/>
    </div>
  )
}

export default App
