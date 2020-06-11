// Function.prototype.apply
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// Set This !!!
// func.apply(thisArg, [argsArray])
    
// Using apply and built-in functions
const arr = [1, 2, 3, 4];
Math.max.apply(null, arr)	// 4

// Using apply to append an array to another 
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]	


// Product

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.apply(this, [name, price]);
    this.category = 'food';
}

console.log(new Food("Bread", 2.50).name);  // Bread


// Person

const firstPerson = {
    name: "Peter", 
    prof: "Fisherman", 
    toString: function () {
        console.log(`${this.name} works as a ${this.prof}`);
    }
};
firstPerson.toString.apply( {name: "George", prof: "Manager"} );  // George works as a Manager
