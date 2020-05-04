function focus() {
    const inputs = document.getElementsByTagName('input');

    for (const input of Array.from(inputs)) {

        input.addEventListener('focus', (event) => {
            event.target.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', (event) => {
            event.target.parentElement.classList.remove('focused');
        });
    }
}