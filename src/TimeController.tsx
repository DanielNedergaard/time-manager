import { useState } from 'react'
import Stopwatch from './Stopwatch'

export default function TimeController(){
    const [elapsedTime, setElapsedTime] = useState<number[]>([0, 0, 0]);
    const [isStopwatchRunning, setIsStopwatchRunning] = useState<boolean[]>([false, false, false]);

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
            <Stopwatch 
                index={0}
                elapsedTime={elapsedTime[0]}
                updateElapsedTime={updateElapsedTime}
                isRunning={isStopwatchRunning[0]}
                updateIsRunning={updateIsStopwatchRunning}
            />
            <Stopwatch 
                index={1}
                elapsedTime={elapsedTime[1]}
                updateElapsedTime={updateElapsedTime}
                isRunning={isStopwatchRunning[1]}
                updateIsRunning={updateIsStopwatchRunning}
            />
            <Stopwatch
                index={2} 
                elapsedTime={elapsedTime[2]}
                updateElapsedTime={updateElapsedTime}
                isRunning={isStopwatchRunning[2]}
                updateIsRunning={updateIsStopwatchRunning}
            />
        </div>
    )
}