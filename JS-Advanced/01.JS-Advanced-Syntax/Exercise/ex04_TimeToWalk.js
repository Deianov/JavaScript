function timeToWalk(steps, footLength, speed) {

    const speedKmHour = 3600 / speed;
    const meters = steps * footLength;
    const breaks = (meters / 500) | 0;

    const timeInSeconds = (meters / 1000 * speedKmHour) + (breaks * 60);
  
    let result = new Date(null, null, null, null, null, Math.round(timeInSeconds));
    
    return result.toTimeString().split(' ')[0];
}

function timeToWalk2(steps, footLength, speed) {

    const speedKmHour = 3600 / speed;
    const meters = steps * footLength;
    const breaks = (meters / 500) | 0;

    let timeInSeconds = (meters / 1000 * speedKmHour) + (breaks * 60);
    timeInSeconds = Math.round(timeInSeconds);

    const hours = (timeInSeconds / 3600) | 0;

    timeInSeconds = timeInSeconds % 3600;
    const minutes = (timeInSeconds / 60) | 0;

    timeInSeconds = timeInSeconds % 60;
    const seconds = timeInSeconds | 0;

    return(`${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`)
    
    function formatNumber(n){
        return n > 9 ? n : '0' + n;
    }
}

console.log(timeToWalk(2564, 0.70, 5.5));