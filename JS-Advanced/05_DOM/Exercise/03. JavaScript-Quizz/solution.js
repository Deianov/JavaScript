function solve() {
    const quizzie  = document.getElementById('quizzie');
    const sections = quizzie.getElementsByTagName('section');

    const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let rightAnswers = 0;
    let currentStep = 0;

    quizzie.addEventListener('click', (e) => {
        if (e.target.className === 'answer-text') {

            sections[currentStep++].style.display = 'none';

            if (correctAnswers.includes(e.target.textContent)) {
                rightAnswers++;
            }

            if (currentStep < correctAnswers.length) {
                sections[currentStep].style.display = 'block';
            } else {
                const resultBlock = document.getElementById('results');
                resultBlock.style.display = 'block';
                const resultElement =  resultBlock.getElementsByTagName('h1')[0];

                if (rightAnswers === correctAnswers.length) {
                    resultElement.textContent = 'You are recognized as top JavaScript fan!'
                } else {
                    resultElement.textContent = `You have ${ rightAnswers } right answers`
                }
            }
        }
    })
}
