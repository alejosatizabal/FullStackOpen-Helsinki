import personsService from '../services/persons'

const PersonForm = ({
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    setPersons,
    persons,
    personsFiltrado,
    setPersonsFiltrado,
    setMensaje,
    setTipoMensaje}) => {

    const addPerson = (event) => {
        event.preventDefault()

        personsService
        .getAll()
        .then(initialPersons => {
            const personaNueva = !((initialPersons.map(person => person.name)).includes(newName))
            if( personaNueva ){
                nuevaPersona()
            }else if(
                window.confirm(
                    `${newName} ya es encuentra en la lista telefonica, ¿desea actualizar el número?`
                )){
                 actualizarPersona()
            }else{
                setNewNumber('')
            }
        })
        .catch(error => {        })
    }

    const nuevaPersona = () => {
        const noteObject = {
            name: newName,
            number: newNumber,
        }
        personsService
        .create(noteObject)
        .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setPersonsFiltrado(persons.concat(returnedPerson))
            setNewNumber('')
            setNewName('')
            setMensaje(`Se agregó '${returnedPerson.name}' a la lista`)
            setTipoMensaje('notifi')
            setTimeout(() => { setTipoMensaje(null) }, 5000)
        })
        .catch(error => {
            //console.log('error.name :>> ', error.name);
            //console.log('error.response.data.error :>> ', error.response.data.error);
            console.log('tipeOf(error.response.data.error) :>> ', typeof(error.response.data.error));
            if ( (error.response.data.error).includes('name') ){
                //console.log('error.response.data.error :>> ', error.response.data.error);
                setMensaje(error.response.data.error)
                setTipoMensaje('error')
                setTimeout(() => { setTipoMensaje(null) }, 5000)
                setNewName('')
            } else if ( (error.response.data.error).includes('number')){
                //console.log('error.response.data.error :>> ', error.response.data.error);
                setMensaje(error.response.data.error)
                setTipoMensaje('error')
                setTimeout(() => { setTipoMensaje(null) }, 5000)
                setNewNumber('')
            }else {
                //setMensaje(`'${changedPerson.name}' was already removed from server`)
                setMensaje('Person was already removed from server')
                setTipoMensaje('error')
                setPersons(persons.filter(person => person.name !== newName))
                setNewNumber('')
                setNewName('')
                setTimeout(() => { setTipoMensaje(null) }, 5000)
            }
        })
    }

    const actualizarPersona = () => {
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ...person, number: newNumber }
        personsService
        .update(changedPerson.id, changedPerson)
        .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
            setPersonsFiltrado(personsFiltrado.map(person => person.id !== changedPerson.id ? person : returnedPerson))
            setMensaje(`Se actualizó el número de '${returnedPerson.name}'`)
            setTipoMensaje('notifi')
            setNewNumber('')
            setNewName('')
            setTimeout(() => { setTipoMensaje(null) }, 5000)
        })
        .catch(error => {
            console.log('tipeOf(error.response.data.error) :>> ', typeof(error.response.data.error));
            if ( (error.response.data.error).includes('number')){
                //console.log('error.response.data.error :>> ', error.response.data.error);
                setMensaje(error.response.data.error)
                setTipoMensaje('error')
                setTimeout(() => { setTipoMensaje(null) }, 5000)
                setNewNumber('')
            }else {
                //setMensaje(`'${changedPerson.name}' was already removed from server`)
                setMensaje('Person was already removed from server')
                setTipoMensaje('error')
                setPersons(persons.filter(person => person.name !== newName))
                setNewNumber('')
                setNewName('')
                setTimeout(() => { setTipoMensaje(null) }, 5000)
            }
        })
        
    }

    const handleNameChange = (event) => {
        //console.log(event.target.value),
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        //console.log(event.target.value),
        setNewNumber(event.target.value)
    }

    return(
        <form  onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm