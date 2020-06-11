
// reduce
function arrayMap(arr, func) {
    return arr.reduce(function(acc, curr) {
        return acc.concat(func(curr));
    }, []);
}

// map
function arrayMap(arr, func) {
    return arr.map(a => func(a))
}


let numbers = [1,2,3,4,5];
console.log(arrayMap(numbers, (item) => item * 2)); // [ 2, 4, 6, 8, 10 ]

let letters = ["a","b","c"];
console.log(arrayMap(letters, (l) => l.toLocaleUpperCase())) // [ 'A', 'B', 'C' ]
