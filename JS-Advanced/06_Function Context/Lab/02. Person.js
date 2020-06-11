function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, "fullName", {
        set: function(value) {
            let [first, last] = value.split(' ');
            this.firstName = first;
            this.lastName = lastName;
        },
        get: function() { 
            return `${this.firstName} ${this.lastName}`
        } 
    }); 
}


// test
let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson