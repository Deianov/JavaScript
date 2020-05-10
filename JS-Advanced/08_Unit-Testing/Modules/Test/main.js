import {printA, printB, updateCount} from './modules/printTest.mjs';
import * as Module from './modules/printTest.mjs';
import name from './modules/printTest.mjs';


document.querySelector('.button').addEventListener('click', () => {
    if(Module.count % 2 === 0) {
        printA()
    } else {
        printB()
    }
    Module.updateCount();
});

document.getElementsByTagName('p')[0].textContent = name;

