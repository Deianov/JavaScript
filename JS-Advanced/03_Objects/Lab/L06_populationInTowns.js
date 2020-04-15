function populationInTowns(args) {

    const towns = new Map()

    for (const line of args) {
        const [town, population] = line.split(/\s*<->\s*/)

        if ( towns.has(town) ) {
            towns.set(town, towns.get(town) + Number(population))
        } else {
            towns.set(town, Number(population))
        }
    }

    for (const [town, population] of towns) {
        console.log(`${town} : ${population}`)
    }
}

populationInTowns([
'Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])