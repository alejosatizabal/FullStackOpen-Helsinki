
const Paises = ({ numPaises, countriesShow }) => {

    console.log('numPaises (Paises) :>> ', numPaises);

    if(1 < numPaises && numPaises <= 10){
        return (
            <div>
                {countriesShow.map(countrie => (
                    <div key={countrie.name.common}>
                        {countrie.name.common}
                    </div>
                ))}
            </div>
        )
    }else if(numPaises > 10){
        return(
            <p>Hay demasiados paises</p>
        )
    }else{
        return null
    }
}

export default Paises