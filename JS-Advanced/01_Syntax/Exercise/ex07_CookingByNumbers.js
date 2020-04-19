function cookingByNumbers(args) {

    const number = Number(args[0]);
    const operations = {
        chop: (n) => n / 2,
        dice: (n) => Math.sqrt(n),
        spice: (n) => n + 1,
        bake: (n) => n * 3,
        fillet: (n) => n * 0.8
    };

    let result = number;

    for (let i = 1; i < args.length; i++) {

        const func = operations[args[i]];

        if (func) {
            result = func(result) || result;
            console.log(result)
        }
    }
}

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);