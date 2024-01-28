const App = () => {
  console.log('Hola desde el componente') // Esta parte del componente puede tener código JavaScript

    const now = new Date()
    const a = 10
    const b = 20
    console.log(now, a+b)

  return (
    <div>
      <p>Hola mundo, son las {now.toString()}</p>
        <p>
            {a} plus {b} is {a+b}
        </p>
    </div>
  )
}

export default App
