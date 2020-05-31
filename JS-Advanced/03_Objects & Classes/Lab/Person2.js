class Person2 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        if (!name) {
            throw new Error('Invalid name: ' + name);
        }
        this._name = name;
    }
}


let person1 = new Person2('Person');
console.log(person1.name);
person1._name = 'aa';
console.log(person1.name);
let person2 = new Person2(); // throw Error