import { useEffect, useState } from 'react'
import Stopwatch from './Stopwatch'

export default function TimeController(){
    const [elapsedTime, setElapsedTime] = useState<number[]>(() => {
        const stored = localStorage.getItem('elapsedTime');
        return stored ? JSON.parse(stored) : [0, 0, 0];
    });
    const [isStopwatchRunning, setIsStopwatchRunning] = useState<boolean[]>(() => {
        const stored = localStorage.getItem('isStopwatchRunning');
        return stored ? JSON.parse(stored) : [false, false, false];
    });
    const [lastStartedAt, setLastStartedAt] = useState<number[]>(() => {
        const stored = localStorage.getItem('lastStartedAt');
        return stored ? JSON.parse(stored) : [0, 0, 0];
    });

    useEffect(() => {
        localStorage.setItem('elapsedTime', JSON.stringify(elapsedTime));
    }, [elapsedTime]);

    useEffect(() => {
        localStorage.setItem('isStopwatchRunning', JSON.stringify(isStopwatchRunning));
    }, [isStopwatchRunning]);

    useEffect(() => {
        localStorage.setItem('lastStartedAt', JSON.stringify(lastStartedAt));
    }, [lastStartedAt]);

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

    function updateLastStartedAt(index: number, value: number) {
        setLastStartedAt(previousArray => {
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
                    lastStartedAt={lastStartedAt[index]}
                    updateLastStartedAt={updateLastStartedAt}
                />
            ))}
        </div>
    )
}