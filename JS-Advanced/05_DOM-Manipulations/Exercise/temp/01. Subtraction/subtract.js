function subtract() {
    const $result = document.getElementById('result');
    const value1 = +document.getElementById('firstNumber').value;
    const value2 = +document.getElementById('secondNumber').value;
    $result.textContent = value1 - value2;
}