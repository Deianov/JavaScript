
// Monkey patching is a technique to add, modify, or suppress the default behavior 
// of a piece of code at runtime without changing its original source code. 
// It has been extensively used in the past by libraries, such as MooTools, 
// and developers to add methods that were missing in JavaScript.

class Spy {
    constructor(obj, methodName) {
        this.count = 0;
        const method = obj[methodName];
        if(!method) { throw new Error('No such method!'); }
        obj[methodName] = function(...args) {
            this.count++;
            return method.call(obj, ...args);
        }.bind(this)
    }
}

function createSpy(obj, methodName) {
    const spy = {count: 0};
    const method = obj[methodName];
    if(!method) { throw new Error('No such method!'); }
    obj[methodName] = function(...args) {
        this.count++;
        return method.call(obj, ...args);
    }.bind(spy);
    return spy;
}

const obj = { concat: function(a) { return this.data + (a || '') }, data: 'ABC'};

const spy1 = new Spy(obj, 'concat');
const spy2 = createSpy(obj, 'concat');

console.log(obj.concat());     // ABC
console.log(obj.concat('D'));  // ABCD
console.log(obj.concat('DE')); // ABCDE

console.log(`Spy1: ${spy1.count} times.`)   // 3
console.log(`Spy2: ${spy2.count} times.`)   // 3