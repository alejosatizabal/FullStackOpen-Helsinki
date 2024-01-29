import { Part } from "./Part";

export const Content = (props) => {
    const { parts } = props;

    /*
    let total = 0;
    const sumando = parts.map(
        part => (
        (total += part.exercises)
    ))
    */
    const suma = parts.reduce(
        (acumulador, valorActual) => acumulador + valorActual.exercises, 0
    );

    return (
        <div>
            <h3>Parts:</h3>
            {parts.map(
                part => (
                    <Part key={part.id} part={part.name} numxpart={part.exercises} />
                ))}
            <b>En total hay {suma} ejercicios</b>
        </div>
    );
};
