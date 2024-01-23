import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0);

  const handleClick = () => {
    console.log('clicked');
    setCounter(counter + 1);
  };
  
  /*
  setTimeout(
    () => setCounter(counter + 1),
    1000
  );
  */

  console.log('rendering...', counter)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus con función
      </button>
      <button onClick={ () => setCounter(counter + 1) }>
        plus, directamente
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
  )
};

export default App;
