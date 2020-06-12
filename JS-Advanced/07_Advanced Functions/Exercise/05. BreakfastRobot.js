let createRobot = 
() => {
    const robot = {
        stock: {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        },
        recipes: {
            apple: {carbohydrate: 1, flavour: 2},
            lemonade: {carbohydrate: 10, flavour: 20},
            burger: {carbohydrate: 5, fat: 7, flavour: 3},
            eggs: {protein: 5, fat: 1, flavour: 1},
            turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
        },
        restock: function (element, quantity) {
            this.stock[element] += quantity;
            return this.output.success()
        },
        prepare: function (recipeName, quantity) {
            const missingElements = this.missing(recipeName, quantity);
            if (missingElements) {
                return missingElements
            }
            for (const element of Object.getOwnPropertyNames(this.recipes[recipeName])) {
                this.stock[element] -= this.recipes[recipeName][element] * quantity
            }
            return this.output.success()
        },
        report: function() {
            return Object.keys(this.stock).map(key => `${key}=${this.stock[key]}`).join(' ')
        },
        missing: function (recipeName, quantity) {
            for (const element of Object.getOwnPropertyNames(this.recipes[recipeName])) {
                const needed = this.recipes[recipeName][element] * quantity;
                if (this.stock[element] < needed) {
                    return this.output.not_enough(element);
                }
            }
            return false
        },
        output: {
            success: () => 'Success',
            not_enough: (e) => `Error: not enough ${e} in stock`,
            error: (e) => `Error: ${e}`
        }
    };

    return function(inputString) {
        const data = inputString.split(' ').map(e => isNaN(e) ? e : Number(e));
        const commandName = data[0];
        if (robot.hasOwnProperty(commandName)) {
            return robot[commandName](...data.splice(1));
        }
    }
};

let manager = createRobot();
let input = [
    'prepare turkey 1',
    'restock protein 10',
    'prepare turkey 1',
    'restock carbohydrate 10',
    'prepare turkey 1',
    'restock fat 10',
    'prepare turkey 1',
    'restock flavour 10',
    'prepare turkey 1',
    'report'
];
input.forEach(commandString => console.log(manager(commandString)));


