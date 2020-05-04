function attachGradientEvents() {
    const result = document.getElementById('result');
    const gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', attachPosition);
    gradient.addEventListener('mouseout', clear);

    function attachPosition(event) {
        const x = event.offsetX;
        const percentage = Math.floor(x / this.clientWidth * 100);
        result.textContent = `${percentage}%`
    }

    function clear() {
        result.textContent = ''
    }
}