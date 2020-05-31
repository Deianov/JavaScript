function heroicInventory(args) {
    const heroes = [];

    for (const heroString of args) {
        const [name, level, items] = heroString.split(' / ');

        const hero = {'name': name, 'level': Number(level)};
        hero.items = items ? items.split(', ') : [];
        heroes.push(hero)
    }
    console.log(JSON.stringify(heroes))
}

function heroicInventoryByReduce(args) {
    const heroes = args.reduce((acc, heroString, i, arr) => {
        let [name, level, items] = heroString.split(' / ');
        items = items ? items.split(', ') : [];

        return [...acc, {name, level: Number(level), items}]
    }, []);

    console.log(JSON.stringify(heroes))
}

function heroicInventoryByReduce2(args) {
    const heroes = args.reduce((acc, heroString, i, arr) => {
        let [name, level, items] = heroString.split(' / ');
        items = items ? items.split(', ') : [];

        acc.push({name, level: Number(level), items});
        return acc
    }, []);

    console.log(JSON.stringify(heroes))
}

heroicInventoryByReduce([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);