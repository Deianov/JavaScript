function cappyJuice(args) {
    const juices = {};
    const temp = {};

    for (let i = 0; i < args.length; i++) {
        const [name, quantity] = args[i].split(' => ');

        const totalQuantity = Number(quantity) + (temp[name] ? temp[name] : 0);
        const bottles = Math.floor(totalQuantity / 1000);
        const tempQuantity = totalQuantity % 1000;

        if (bottles > 0) {
            juices[name] = juices[name] ? juices[name] + bottles : bottles
        } 

        if (tempQuantity) {
            temp[name] = tempQuantity
        }
    }

    for (const [name, bottles] of Object.entries(juices)) {
        console.log(`${ name } => ${ bottles }`)
    }
}

function cappyJuiceWithReduce(args) {

    const result = args.reduce((acc, current) => {
        const [name, quantity] = current.split(' => ');

        const totalQuantity = Number(quantity) + (acc.temp[name] ? acc.temp[name] : 0);
        const bottles = Math.floor(totalQuantity / 1000);
        const tempQuantity = totalQuantity % 1000;

        if (bottles > 0) {
            acc.juices[name] = acc.juices[name] ? acc.juices[name] + bottles : bottles
        } 

        if (tempQuantity) {
            acc.temp[name] = tempQuantity
        }
        return acc;
        
    }, { juices: {}, temp: {} }).juices;

    for (const [name, bottles] of Object.entries(result)) {
        console.log(`${ name } => ${ bottles }`)
    }
}

cappyJuiceWithReduce([
'Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);