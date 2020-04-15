function cityMarkets(args) {
    
    const markets = new Map()

    for (const productString of args) {
        const [town, product, sales] = productString.split(' -> ')
        const [quantity, price] = sales.split(' : ').map(Number)

        let totalIncome = quantity * price

        if (markets.has(town)) {
            totalIncome += markets.get(town).get(product) || 0
        } else {
            markets.set(town, new Map())
        }
        
        markets.get(town).set(product, totalIncome)
    }

    for (const [town, products] of markets) {
        console.log(`Town - ${town}`)
        
        for (const [product, income] of products) {
            console.log(`$$$${product} : ${income}`)
        }
    }
}

cityMarkets([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'])