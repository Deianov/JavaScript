
// Immediately-Invoked Function Expressions (IIFE)


// Immediately creates the output: 
let result = (function () {
    let name = "Peter"; 
    return name; 
})(); 
console.log(result); // Peter
    

// Variable name is not accessible from the outside scope
(function () { 
    let name = "Peter"; 
})();
// console.log(name); // ReferenceError


// Library
const myLib = (function () {

    function add(a, b) { return a + b; }
    function sub(a, b) { return a - b; }
    //...

    return {
        add,
        sub
    };

}());

console.log(myLib.add(1, 2)); // 3