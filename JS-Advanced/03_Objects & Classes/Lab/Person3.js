class Person3 {
    #name;
    constructor(name) {
        this.#name = name;
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        if (!name) {
            throw new Error('Invalid name: ' + name);
        }
        this.#name = name;
    }
}

let person = new Person3('Person');
console.log(person.name); // Person
person.name = 'Ivan';
console.log(person.name); // Ivan

new Person3();      // don't use the setter
person.name = null; // Error: Invalid name: null