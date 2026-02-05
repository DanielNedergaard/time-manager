import { useState } from 'react'
import Stopwatch from './Stopwatch'

export default function TimeController(){
    const [elapsedTime, setElapsedTime] = useState<number[]>([0, 0, 0]);

    return (
        <div className="stopwatch-container">
            <Stopwatch 
                index={0}
                elapsedTime={elapsedTime[0]}
                setElapsedTime={setElapsedTime}/>
            <Stopwatch 
                index={1}
                elapsedTime={elapsedTime[1]}
                setElapsedTime={setElapsedTime}/>
            <Stopwatch
                index={2} 
                elapsedTime={elapsedTime[2]}
                setElapsedTime={setElapsedTime}/>
        </div>
    )
}