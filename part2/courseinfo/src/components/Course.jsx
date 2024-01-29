/*
App
  Course
    Header
    Content
      Part
      Part
*/

import { Content } from "./Content";
import { Header } from "./Header";

const Course = (props) => {
    //console.log(props);
    const { cursos } = props
    return (
        <div>
            <h1>Curriculum de Desarrollo Web</h1>
            {cursos.map(
                curso => (
                    <div key={curso.id}>
                        <Header name={curso.name} />
                        <Content parts={curso.parts} />
                    </div>
                ))}
        </div>
    )
}

export default Course