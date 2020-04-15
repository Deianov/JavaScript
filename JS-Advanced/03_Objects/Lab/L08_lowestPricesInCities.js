function lowestPricesInCities(args) {

    const products = new Map()

    for (const productString of args) {
        const [town, product, price] = productString.split(' | ')

        if (!products.has(product)){
            products.set(product, new Map())
        }
        products.get(product).set(town, Number(price))
    }

    for (const [product, towns] of products) {

        let minPrice = Number.MAX_VALUE
        let minPriceTown

        for (const [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price
                minPriceTown = town
            }
        }
        
        console.log(`${product} -> ${minPrice} (${minPriceTown})`)
    }
}

lowestPricesInCities([
'Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])