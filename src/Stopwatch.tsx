import { useEffect, useRef, useState } from 'react'

type StopwatchProps = {
    index: number;
    elapsedTime: number;
    updateElapsedTime: (index: number, value: number) => void;
};

export default function Stopwatch({ index, elapsedTime, updateElapsedTime }: StopwatchProps) {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const startTimeRef = useRef<number>(0);

    useEffect (() => {
        let interval: number | undefined;

        if (isRunning) {
            interval = setInterval(() => {
                updateElapsedTime(index, Date.now() - startTimeRef.current);
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
        updateElapsedTime(index, 0);
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
        <div className="stopwatch-card">
            <span className='time-span' >{formatMsToHHMMSS(elapsedTime)}</span>
            {isRunning === false && elapsedTime === 0 && (
                <button className='wide-button green-button' onClick={initiateStopwatch}>Start</button> // show start button when timer is not running and time is 0
            )}
            {isRunning && (
                <button className='wide-button red-button' onClick={stopStopwatch}>Stop</button> // show stop button when timer is running
            )}
            <div>
                {isRunning === false && elapsedTime > 0 && (
                    <button className='split-button green-button' onClick={resumeStopwatch}>Resume</button> // show resume button when timer is not running and time is greater than 0
                )}
                {isRunning === false && elapsedTime > 0 && (
                    <button className='split-button red-button' onClick={resetStopwatch}>Reset</button> // show reset button when timer is not running and time is greater than 0
                )}
            </div>
        </div>
    );
}