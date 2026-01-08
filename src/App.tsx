import './App.css'
import Stopwatch from './Stopwatch'

function App() {
  return (
    <>
      <h1>Time Manager</h1>
      <div className="stopwatch-container">
        <Stopwatch />
        <Stopwatch />
        <Stopwatch />
      </div>
    </>
  )
}

export default App
