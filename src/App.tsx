import './App.css'
import StopwatchComponent from './StopwatchComponent'
import TimerComponent from './TimerComponent'

function App() {
  return (
    <>
      <h1>Time Manager</h1>
      <div className="stopwatch-container">
        <StopwatchComponent />
        <StopwatchComponent />
        <TimerComponent />
      </div>
    </>
  )
}

export default App
