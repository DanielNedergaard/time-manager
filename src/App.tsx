import './App.css'
import StopwatchComponent from './StopwatchComponent'

function App() {
  return (
    <>
      <h1>Time Manager</h1>
      <div className="stopwatch-container">
        <StopwatchComponent />
        <StopwatchComponent />
        <StopwatchComponent />
      </div>
    </>
  )
}

export default App
