import { useRef, useState, useEffect } from 'react'

export default function StopwatchComponent() {
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTimeRef = useRef<number>(0);
    const timerRef = useRef<number | null>(null);
    
    function initiateStopwatch() {
        startTimeRef.current = new Date().getTime();
    }

    function stopStopwatch() {
        if (timerRef.current !== null) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }

    function resetStopwatch() {
        setElapsedTime(0);
    }

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            
        }, 1000);
        setElapsedTime((new Date().getTime() - startTimeRef.current) / 1000) // the / 1000 converts milliseconds to seconds
    });

    return (
        <div className="card">
            <span id="time">{elapsedTime.toFixed(0)}s</span>
            <button id="start-button" onClick={initiateStopwatch}>Start</button>
            <button id="stop-button" onClick={stopStopwatch}>Stop</button>
            <button id="reset-button" onClick={resetStopwatch}>nulstil</button>
        </div>
    );
}