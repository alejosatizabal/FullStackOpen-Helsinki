/*
App
  Course
    Header
    Content
      Part
      Part
*/

const Header = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
      </div>
    )
  }

  const Content = (props) => {
    const { parts } = props;
    return (
      <div>
        <h1>Parts:</h1>
        {parts.map(
            part => (
            <Part key={part.id} part={part.name} numxpart={part.exercises} />
        ))}
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

const Course = (props) => {
    //console.log(props);
    return(
        <div>
            <Header name={props.curso.name}/>
            <Content parts={props.curso.parts}/>
        </div>
    )
}
  
export default Course