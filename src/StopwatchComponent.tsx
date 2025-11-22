import { useRef, useState, useEffect } from 'react'

export default function StopwatchComponent() {
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const startTimeRef = useRef<number>(0);
    const timerRef = useRef<number>(0);
    
    function initiateStopwatch() {
        setIsRunning(true);
        startTimeRef.current = new Date().getTime();

        timerRef.current = window.setInterval(() => {
            setElapsedTime((new Date().getTime() - startTimeRef.current) / 1000) // the / 1000 converts milliseconds to seconds
        }, 1000);
    }

    function stopStopwatch() {
        setIsRunning(false);
        clearInterval(timerRef.current);
    }

    function resumeStopwatch() {
        setIsRunning(true);
        
        timerRef.current = window.setInterval(() => {
            setElapsedTime((new Date().getTime() - startTimeRef.current) / 1000) // the / 1000 converts milliseconds to seconds
        }, 1000);
    }

    function resetStopwatch() {
        setElapsedTime(0);
        timerRef.current = 0;
    }

    return (
        <div className="card">
            <span id="time">{elapsedTime.toFixed(0)}s</span>
            {isRunning === false && timerRef.current === 0 && (
                <button id="start-button" onClick={initiateStopwatch}>Start</button> // show start button when timer is not running
            )}
            {isRunning && (
                <button id="stop-button" onClick={stopStopwatch}>Stop</button>
            )}
            {isRunning === false && timerRef.current > 0 && (
                <button id="resume-button" onClick={resumeStopwatch}>Geonoptag</button>
            )}
            {isRunning === false && timerRef.current > 0 && (
                <button id="reset-button" onClick={resetStopwatch}>Nulstil</button>
            )}
        </div>
    );
}