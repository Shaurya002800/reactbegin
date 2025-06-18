import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

let addValue = () => {
  if (count < 20) setCount(count + 1)
}
let removeValue = () => {
  if(count > 0) setCount(count - 1)
}


  return (
    <>
   <h1>Shaurya with react</h1>
   <h2>current count: {count}</h2>
   <div>
    <button onClick={addValue}>Increase Count</button>
    <br /><br />
    <button onClick={removeValue}>Decrease Count</button>
   </div>
    </>
  )
}

export default App
