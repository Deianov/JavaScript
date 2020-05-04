function stopwatch() {
    const startButton = document.getElementById('startBtn');
    startButton.addEventListener('click', start);

    const stopButton = document.getElementById('stopBtn');
    stopButton.addEventListener('click', stop);

    const outputBox = document.getElementById('time');
    let timerID = null;

    function stop() {
        stopButton.disabled = true;
        startButton.disabled = false;
        clearInterval(timerID);
    }

    function start() {
        startButton.disabled = true;
        stopButton.disabled = false;

        let seconds = 0;
        timerID = setInterval(tick, 1000);
        outputBox.textContent = '00:00';

        function tick() {
            seconds++;
            let currentMinutes = ('0' + Math.floor(seconds / 60)).slice(-2);
            let currentSeconds = ('0' + seconds % 60).slice(-2);
            outputBox.textContent = `${currentMinutes}:${currentSeconds}`;
        }
    }
}