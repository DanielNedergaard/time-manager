import { useEffect, useState } from 'react'
import Stopwatch from './Stopwatch'

export default function TimeController(){
    const [elapsedTime, setElapsedTime] = useState<number[]>([0, 0, 0]);
    const [isStopwatchRunning, setIsStopwatchRunning] = useState<boolean[]>([false, false, false]);

    useEffect(() => {
        const storedElapsedTime = localStorage.getItem('elapsedTime');
        const storedIsStopwatchRunning = localStorage.getItem('isStopwatchRunning');

        if (storedElapsedTime !== null) {
            setElapsedTime(JSON.parse(storedElapsedTime));
        }

        if (storedIsStopwatchRunning !== null) {
            setIsStopwatchRunning(JSON.parse(storedIsStopwatchRunning));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('elapsedTime', JSON.stringify(elapsedTime));
    }, [elapsedTime]);

    useEffect(() => {
        localStorage.setItem('isStopwatchRunning', JSON.stringify(isStopwatchRunning));
    }, [isStopwatchRunning]);

    function updateElapsedTime(index: number, value: number) {
        setElapsedTime(previousArray => {
            const newArray = [...previousArray];
            newArray[index] = value;
            return newArray;
        });
    }

    function updateIsStopwatchRunning(index: number, value: boolean) {
        setIsStopwatchRunning(previousArray => {
            const newArray = [...previousArray];
            newArray[index] = value;
            return newArray;
        });
    }

    return (
        <div className="stopwatch-container">
            {elapsedTime.map((time, index) => (
                <Stopwatch
                    index={index}
                    elapsedTime={time}
                    updateElapsedTime={updateElapsedTime}
                    isRunning={isStopwatchRunning[index]}
                    updateIsRunning={updateIsStopwatchRunning}
                />
            ))}
        </div>
    )
}