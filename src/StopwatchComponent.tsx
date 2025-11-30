import { useEffect, useRef, useState } from 'react'

export default function StopwatchComponent() {
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const startTimeRef = useRef<number>(0);

    useEffect (() => {
        let interval: number | undefined;

        if (isRunning) {
            interval = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    function initiateStopwatch() {
        setIsRunning(true);
        startTimeRef.current = Date.now();
    }

    function stopStopwatch() {
        setIsRunning(false);
    }

    function resumeStopwatch() {
        setIsRunning(true);

        startTimeRef.current = Date.now() - elapsedTime; // moving the startTime to match time passed
    }

    function resetStopwatch() {
        setElapsedTime(0);
    }

    function formatMsToHHMMSS(ms: number): string {
        let hours = Math.floor(ms / 60 / 60 / 1000);
        let minutes = Math.floor((ms / 60 / 1000) % 60);
        let seconds = Math.floor((ms / 1000) % 60);

        // adds leading zero
        let hoursStr = ("0" + hours).slice(-2);
        let minutesStr = ("0" + minutes).slice(-2);
        let secondsStr = ("0" + seconds).slice(-2);

        return hoursStr + ":" + minutesStr + ":" + secondsStr;
    }

    return (
        <div className="card">
            <span id="time">{formatMsToHHMMSS(elapsedTime)}</span>
            {isRunning === false && elapsedTime === 0 && (
                <button id="start-button" onClick={initiateStopwatch}>Start</button> // show start button when timer is not running and time is 0
            )}
            {isRunning && (
                <button id="stop-button" onClick={stopStopwatch}>Stop</button> // show stop button when timer is running
            )}
            {isRunning === false && elapsedTime > 0 && (
                <button id="resume-button" onClick={resumeStopwatch}>Geonoptag</button> // show resume button when timer is not running and time is greater than 0
            )}
            {isRunning === false && elapsedTime > 0 && (
                <button id="reset-button" onClick={resetStopwatch}>Nulstil</button> // show reset button when timer is not running and time is greater than 0
            )}
        </div>
    );
}