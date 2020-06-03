function toggle() {
    const buttonText = document.getElementsByClassName('button')[0].firstChild;
    buttonText.textContent = buttonText.textContent === 'More' ? 'Less' : 'More';

    const extra = document.getElementById('extra');
    extra.style.display = buttonText.textContent === 'More' ? 'none' : 'block';
}