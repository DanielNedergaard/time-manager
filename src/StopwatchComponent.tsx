import { useRef, useState } from 'react'

export default function StopwatchComponent() {
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const startTimeRef = useRef<number>(0);
    const timerRef = useRef<number>(0);
    
    function initiateStopwatch() {
        setIsRunning(true);
        startTimeRef.current = new Date().getTime();

        timerRef.current = window.setInterval(() => {
            setElapsedTime(new Date().getTime() - startTimeRef.current) // the / 1000 converts milliseconds to seconds
        }, 1000);
    }

    function stopStopwatch() {
        setIsRunning(false);
        clearInterval(timerRef.current);
    }

    function resumeStopwatch() {
        setIsRunning(true);

        startTimeRef.current = new Date().getTime() - elapsedTime; // moving the startTime to match time passed and converting seconds to milliseconds 

        timerRef.current = window.setInterval(() => {
            setElapsedTime(new Date().getTime() - startTimeRef.current) // the / 1000 converts milliseconds to seconds
        }, 1000);
    }

    function resetStopwatch() {
        setElapsedTime(0);
        timerRef.current = 0;
    }

    function formatMsToHHMMSS(ms: number): string {
        let hours = Math.floor(ms / 60 / 60 / 1000);
        let minutes = Math.floor((ms / 60 / 1000) % (60 * 60));
        let seconds = Math.floor((ms / 1000) % 60);

        // adds leading zero
        let hoursStr = ("00" + hours).slice(-2);
        let minutesStr = ("00" + minutes).slice(-2);
        let secondsStr = ("00" + seconds).slice(-2);

        return hoursStr + ":" + minutesStr + ":" + secondsStr;
    }

    return (
        <div className="card">
            <span id="time">{formatMsToHHMMSS(elapsedTime)}</span>
            {isRunning === false && timerRef.current === 0 && (
                <button id="start-button" onClick={initiateStopwatch}>Start</button> // show start button when timer is not running and time is 0
            )}
            {isRunning && (
                <button id="stop-button" onClick={stopStopwatch}>Stop</button> // show stop button when timer is running
            )}
            {isRunning === false && timerRef.current > 0 && (
                <button id="resume-button" onClick={resumeStopwatch}>Geonoptag</button> // show resume button when timer is not running and time is greater than 0
            )}
            {isRunning === false && timerRef.current > 0 && (
                <button id="reset-button" onClick={resetStopwatch}>Nulstil</button> // show reset button when timer is not running and time is greater than 0
            )}
        </div>
    );
}