// Function Context
// Understanding the "This" Keyword in JavaScript

// In Events
// this === e.target


// Object

let person = {
    firstName: "James",
    lastName: "Bond",
    fullName: function(){
        return this.firstName + " " + this.lastName
    },
    is: function() { 
        return this 
    }
}

console.log(person.fullName());     // James Bond
console.log(person.is());           // Object {firstName: "James", lastName: "Bond", fullName: , is: }

// Classes
// The value of this refers to the newly created instance

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.first= function () {
            console.log(this.firstName);
        } 
        this.last = () => console.log(this.lastName)
    } 
    get fullName() {
        console.log(`Name: ${this.firstName} ${this.lastName}`)
    }
};
  
let person1 = new Person("James", "Bond");
person1.first();    // James
person1.last();     // Bond
person1.fullName;   // James Bond


// Functions
// this variable is accessible only by the function itself

function outer() {
    console.log(this);      // Object {name: "Peter"}
    function inner() {
      console.log(this);    // Window
    }
    inner();
}

const obj = { name: 'Peter', func: outer }
obj.func();

// This" with Arrow Functions
// this retains the value of the enclosing lexical context

function outer() {
    const inner = () => console.log(this);
    inner();
}
  
