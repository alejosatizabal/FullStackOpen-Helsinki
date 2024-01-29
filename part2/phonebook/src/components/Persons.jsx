const Persons = ({persons}) => {

    return(
        <div>
            {persons.map(persona => (
                <div key={persona.name}>{persona.name}: {persona.number}</div>
            ))}
        </div>
    )
}

export default Persons