function coffeeMachine(args) {

    const prices = {
        'coffee caffeine': 0.80,
        'coffee decaf': 0.90,
        'tea': 0.80,
        'sugar': 0.10
    };
    const milkPercent = 0.10;
    let incomeReport = 0;

    for (let index = 0; index < args.length; index++) {

        const order = args[index].split(', ');
        const coinsInserted = parseFloat(order.shift());

        let drink = order.shift();

        if(drink === 'coffee'){
            drink = drink + ' ' + order.shift()
        }

        let price = prices[drink] || 0;
        let element;

        while (element = order.shift()) {

            if (element === 'milk') {
                const p = Math.round(price * milkPercent * 10) / 10;
                price += p
            } else {
                const sugar = parseInt(element);
                if(sugar && sugar > 0) {
                    price += prices['sugar']
                }
            }
        }

        if (price > coinsInserted) {
            price = (price - coinsInserted).toFixed(2);
            console.log(`Not enough money for ${drink}. Need $${price} more`)
        } else {
            price = price.toFixed(2);
            const change = (coinsInserted - price).toFixed(2);
            console.log(`You ordered ${drink}. Price: $${price} Change: $${change}`);
            incomeReport += parseFloat(price)
        }
    }
    console.log(`Income Report: $${incomeReport.toFixed(2)}`)
}

coffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']);