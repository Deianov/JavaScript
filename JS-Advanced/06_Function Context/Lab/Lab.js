
function fullName() { 
    return `${this.firstName} ${this.lastName}`
} 

const bond = {
    firstName: 'James',
    lastName: 'Bond',
    fullName // reference
}

const snow = {
    firstName: 'Jon',
    lastName: 'Snow',
    fullName() { 
        return `${this.firstName} ${this.lastName}`
    } 
}

const test = {
    firstName: 'Test1',
    lastName: 'Test2',
    fullName: snow.fullName // reference
}

console.log(bond.fullName()); // James Bond
console.log(test.fullName()); // Test1 Test2