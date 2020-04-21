function autoEngineeringCompany(args) {
    const cars = {};
    // {'audi': {'Q7': 1000, 'Q6':100}, ... }

    args.forEach(carString => {
        const [brand, model, produced] = carString.split(' | ');
        let totalProduced = Number(produced);

        if (cars[brand]) {
            totalProduced += cars[brand][model] || 0
        } else {
            cars[brand] = {}
        }
        cars[brand][model] = totalProduced
    });

    for (const brand of Object.keys(cars)) {
        console.log(brand);

        for (const model of Object.keys(cars[brand])) {
            console.log(`###${model} -> ${cars[brand][model]}`)
        }
    }
}

autoEngineeringCompany([
'Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);