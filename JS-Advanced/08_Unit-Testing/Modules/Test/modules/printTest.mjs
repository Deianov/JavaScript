const name = 'printTest';
let count = 0;

function printA() {
    printText('A');
}

function printB() {
    printText('B');
}

function printText(value) {
    const div = document.getElementsByTagName('div')[0];
    const test = document.createTextNode(` ${value}.`);
    div.appendChild(test);
}

function updateCount() {
    document.getElementsByTagName('p')[0].textContent = `${name}: ${++count}`;
}

export {count, printA, printB, updateCount};
export default name;