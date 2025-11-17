import { useState } from 'react'
import './App.css'
import Stopwatch from './Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Time Manager</h1>
      <Stopwatch />
    </>
  )
}

export default App
