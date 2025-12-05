import { useEffect, useRef, useState } from 'react'
import { formatMsToHHMMSS } from './timeUtils';

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

    return (
        <div className="stopwatch-card">
            {isRunning === false && (
                <input className='time-span' >{formatMsToHHMMSS(elapsedTime)}</input>
            )}
            {isRunning === true && (
                <span className='time-span' >{formatMsToHHMMSS(elapsedTime)}</span>
            )}
            {isRunning === false && elapsedTime === 0 && (
                <button className='wide-button' onClick={initiateStopwatch}>Start</button> // show start button when timer is not running and time is 0
            )}
            {isRunning && (
                <button className='wide-button' onClick={stopStopwatch}>Stop</button> // show stop button when timer is running
            )}
            <div>
                {isRunning === false && elapsedTime > 0 && (
                    <button className='split-button' onClick={resumeStopwatch}>Resume</button> // show resume button when timer is not running and time is greater than 0
                )}
                {isRunning === false && elapsedTime > 0 && (
                    <button className='split-button' onClick={resetStopwatch}>Reset</button> // show reset button when timer is not running and time is greater than 0
                )}
            </div>
        </div>
    );
}