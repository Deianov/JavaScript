function solve() {

    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = '';

    const PARAGRAPH_LENGTH = 3;
    const sentences = inputElement.innerText.split('.').map(e => e.trim()).filter(Boolean);
    let currentParagraph = '';
    const length = sentences.length;

    for (let i = 0; i < length; i++) {
        currentParagraph += `${ currentParagraph ? ' ' : '' }${ sentences[i] }.`;

        if (i === (length - 1) || (i + 1) % PARAGRAPH_LENGTH === 0 ) {

            const newParagraph = document.createElement('p');
            newParagraph.textContent = currentParagraph;
            currentParagraph = '';
            outputElement.appendChild(newParagraph);
        }
    }
}