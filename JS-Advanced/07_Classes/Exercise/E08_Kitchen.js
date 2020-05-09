class Kitchen {
    constructor(budget) {
        this.budget = Number(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }
    loadProducts(productsInput) {
        const products = productsInput.map(input => {
           const data = input.split(' ');
           return {
               name: data[0],
               quantity: Number(data[1]),
               price: Number(data[2])
           }
        });
        for (const product of products) {
            const {name, quantity, price} = product;
            if (this.budget >= price) {
                if (!this.productsInStock.hasOwnProperty(name)) { this.productsInStock[name] = 0 }
                this.productsInStock[name] += quantity;
                this.budget -= price;
                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }
        return this.actionsHistory.join('\n');
    }
    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            const recipe = neededProducts.reduce((acc, str) => {
                const [name, quantity] = str.split(' ');
                acc[name] = Number(quantity);
                return acc;
            }, {});
            this.menu[meal] = {
                products: recipe,
                price: price
            };
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }
    showTheMenu() {
        const keys = Object.keys(this.menu);
        if (keys.length) {
            return keys.map(key => `${key} - $ ${this.menu[key].price}`).join('\n') + '\n';

        } else { return 'Our menu is not ready yet, please come later...' }
    }
    makeTheOrder(meal) {
        if (this.menu.hasOwnProperty(meal)) {
            const recipe = this.menu[meal];
            const names = Object.keys(recipe.products);

            if (names.some(name => this.hasProduct(name, recipe.products[name]) === false)) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

            names.forEach(name => this.useProduct(name, recipe.products[name]));
            this.budget += recipe.price;
            return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`)
        }
        return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }
    hasProduct(name, quantity) {
        return this.productsInStock.hasOwnProperty(name) && this.productsInStock[name] >= quantity
    }
    useProduct(name, quantity) {
        this.productsInStock[name] -= quantity;
    }
}

let kitchen = new Kitchen(1000);

console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.makeTheOrder('Pizza'));
console.log(kitchen.showTheMenu());