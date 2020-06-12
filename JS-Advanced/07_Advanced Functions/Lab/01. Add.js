function solution(a) {
    return function (b) {
        return a + b
    }
}

let add5 = solution(5);
console.log(add5(2)); // 7
console.log(add5(3)); // 8
