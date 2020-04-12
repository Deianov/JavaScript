function calculateMoney(fruit, weightGrams, moneyPerKg) {

    const weightKg = weightGrams / 1000.0;
    const money = weightKg * moneyPerKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}


calculateMoney('orange', 2500, 1.80);