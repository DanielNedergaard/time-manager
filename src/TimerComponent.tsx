import { useEffect, useRef, useState } from 'react'
import { formatMsToHHMMSS } from './timeUtils';

export default function TimerComponent() {
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

    function initiateTimer() {
        setIsRunning(true);
        startTimeRef.current = Date.now();
    }

    function stopTimer() {
        setIsRunning(false);
    }

    function resumeTimer() {
        setIsRunning(true);

        startTimeRef.current = Date.now() - elapsedTime; // moving the startTime to match time passed
    }

    function resetTimer() {
        setElapsedTime(0);
    }

    return (
        <div className="stopwatch-card">
            {isRunning === false && (
                <input className='time-span' value={formatMsToHHMMSS(elapsedTime)} />
            )}
            {isRunning === true && (
                <span className='time-span' >{formatMsToHHMMSS(elapsedTime)}</span>
            )}
            {isRunning === false && elapsedTime === 0 && (
                <button className='wide-button' onClick={initiateTimer}>Start</button> // show start button when timer is not running and time is 0
            )}
            {isRunning && (
                <button className='wide-button' onClick={stopTimer}>Stop</button> // show stop button when timer is running
            )}
            <div>
                {isRunning === false && elapsedTime > 0 && (
                    <button className='split-button' onClick={resumeTimer}>Resume</button> // show resume button when timer is not running and time is greater than 0
                )}
                {isRunning === false && elapsedTime > 0 && (
                    <button className='split-button' onClick={resetTimer}>Reset</button> // show reset button when timer is not running and time is greater than 0
                )}
            </div>
        </div>
    );
}