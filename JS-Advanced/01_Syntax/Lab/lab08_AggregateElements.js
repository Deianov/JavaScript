function solve(args) {

    console.log(aggregate(0, args, (a, b) => a + b));
    console.log(aggregate(0, args, (a, b) => a + 1 / b));
    console.log(aggregate('', args, (a, b) => a + b));

    function aggregate(base, elements, func) {
        let result = base;

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            result = func(result, element);
        }

        return result;
    }

}

solve([2, 4, 8, 16]);