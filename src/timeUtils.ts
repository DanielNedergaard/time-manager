export function formatMsToHHMMSS(ms: number): string {
    let hours = Math.floor(ms / 60 / 60 / 1000);
    let minutes = Math.floor((ms / 60 / 1000) % 60);
    let seconds = Math.floor((ms / 1000) % 60);

    // adds leading zero
    let hoursStr = ("0" + hours).slice(-2);
    let minutesStr = ("0" + minutes).slice(-2);
    let secondsStr = ("0" + seconds).slice(-2);

    return hoursStr + ":" + minutesStr + ":" + secondsStr;
}