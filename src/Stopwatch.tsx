export default function Stopwatch() {
    return (
        <div className="card">
            <span id="time">00:00:00</span>
            <button id="start-button">Start</button>
            <button id="stop-button">Stop</button>
            <button id="reset-button">Nulstil</button>
        </div>
    );
}