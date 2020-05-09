
// variant 1: closure function
let Extensible = (function () {
    let nextId = 0;

    return class Extensible {
        constructor() {
            this.id = nextId++;
        }
        extend(template) {
            for (const prop of Object.keys(template)) {
                if (template.hasOwnProperty(prop)) {
                    if (typeof template[prop] === 'function') {
                        Extensible.prototype[prop] = template[prop];
                    } else {
                        this[prop] = template[prop];
                    }
                }
            }
        }
    };
})();

// variant 2: prototype
class Extensible {
    constructor() {
        if (Extensible.prototype.id === undefined) { Extensible.prototype.id = 0 }
        this.id = Extensible.prototype.id++;
    }
    extend(template) {
        for (const prop of Object.keys(template)) {
            if (template.hasOwnProperty(prop)) {
                if (typeof template[prop] === 'function') {
                    Extensible.prototype[prop] = template[prop];
                } else {
                    this[prop] = template[prop];
                }
            }
        }
    }
}

const obj1 = new Extensible();
const obj2 = new Extensible();

const template = {
    name: 'My property',
    func: function () {
        return 'ID: ' + this.id;
    }
};
obj2.extend(template);

console.log(obj1);
console.log(obj1.name);
console.log(obj1.func());
console.log('');

console.log(obj2);
console.log(obj2.name);
console.log(obj2.func());
