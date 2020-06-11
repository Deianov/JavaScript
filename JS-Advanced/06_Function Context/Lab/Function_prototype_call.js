// Set This !!!
// func.call([thisArg[, arg1, arg2, ...argN]])

function Product(name, price) {
        this.name = name;
        this.price = price;
}

function Food(name, price) {
        Product.call(this, name, price);
        this.category = 'food';
}

console.log(new Food("Bread", 2.50).name);  // Bread


// greet
function greet() {
    console.log(this.name);
}

let person = { name:'Alex' };
greet.call(person);     // Alex
  

//  My hobbies 

const sharePersonalInfo = function (...activities) {
    let info = `Hello, my name is ${this.name}.\nMy hobbies are:\n`;
    info += activities.map(a => `--- ${a}`).join('\n');
    return info;
}
const firstPerson = { name: "Peter"};
console.log(sharePersonalInfo.call(firstPerson, 'biking', 'swimming','football'));
// Hello, my name is Peter.
// My hobbies are:
// --- biking
// --- swimming
// --- football