// Emulating private methods with closures
// example 1

function solution(text) {
    let str = text;

    function concat(s) {
        str += s
    }

    function removeFirst(n) {
        str = str.substring(n)
    }

    return {
        append: concat,
        removeStart: (n) => removeFirst(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str)
    }
}

const test1 = solution(11);
const test2 = solution(2);

test1.append(' + 1');
test2.append(' + 2');
test1.removeStart(1);

console.log('example 1');
test1.print();  // 1 + 1
test2.print();  // 2 + 2

// example 2

const counter = (function() {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function() {
            changeBy(1);
        },

        decrement: function() {
            changeBy(-1);
        },

        value: function() {
            return privateCounter;
        }
    };
})();

console.log('example 2');
counter.increment();
counter.increment();
console.log(counter.value());  // 2.

// example 3

const makeCounter = function() {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },

        decrement: function() {
            changeBy(-1);
        },

        value: function() {
            return privateCounter;
        }
    }
};

const counter1 = makeCounter();
const counter2 = makeCounter();

counter1.increment();
counter1.increment();
counter2.increment();
counter2.decrement();

console.log('example 3');
console.log(counter1.value()); // 2.
console.log(counter2.value()); // 0.

// example 4

const superCounter = function() {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    const result = {
        increment: function() {
            changeBy(1);
            return result;
        },

        decrement: function() {
            changeBy(-1);
            return result;
        },

        value: function() {
            return privateCounter;
        }
    };

    return result;
};

const superCounter1 = superCounter();
const superCounter2 = superCounter();

superCounter1.increment().increment().increment();
superCounter2.increment().decrement();

console.log('example 4');
console.log(superCounter1.value()); // 3
console.log(superCounter2.value()); // 0

// example 5

let lastId = 100;

const createPerson = function(personName) {

    const id = ++lastId;
    let name = personName;

    function getId() {
        return id
    }

    function getName() {
        return name
    }

    function setName(personName) {
        name = personName
    }

    return {
        getId: getId,
        getName: getName,
        setName: setName
    }
};

const pesho = createPerson('Pesho');
pesho.setName('Petar');

console.log('example 5');
console.log(pesho.getId());     // 101
console.log(pesho.getName());   // Petar
