function storeCatalogueLab(args) {
    let data = args.reduce((acc, productString) => {
        const [name, price] = productString.split(' : ');

        if (acc[name[0]]) {
            acc[name[0]] = [...acc[name[0]], productString]
        } else {
            acc[name[0]] = [productString]
        }

        return acc
    }, {});

    Object.keys(data).sort().map(x => {
        console.log(x);
        data[x].sort().map(product => {
            console.log(`  ${ product.split(' : ').join(': ') }`)
        })
    })
}

function storeCatalogueObject(input) {
    const catalogue = {};

    input.forEach(productString => {
      const [name, price] = productString.split(' : ');
      const letter = name[0].toUpperCase();
      const product = {'name': name, 'price': Number(price)};

      if (!catalogue.hasOwnProperty(letter)) {
        catalogue[letter] = []
      }

      catalogue[letter].push(product)
    });

    Object.keys(catalogue).sort().forEach(key => {
      console.log(key);

      catalogue[key].sort((a, b) => a.name.localeCompare(b.name)).forEach(product => {
        console.log(` ${product.name}: ${product.price}`);
      })
    })
}

function storeCatalogueMap(input) {
    const catalogue = new Map();

    input.forEach(productString => {
      const [name, price] = productString.split(' : ');
      const letter = name[0].toUpperCase();
      const product = {'name': name, 'price': Number(price)};

      if (!catalogue.has(letter)) {
        catalogue.set(letter, [])
      }

      catalogue.get(letter).push(product)
    });

    [...catalogue]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(products => {
         console.log(products[0]);
         products[1].sort((a, b) => a.name.localeCompare(b.name)).forEach(product => {
           console.log(` ${product.name}: ${product.price}`);
         })
    });
}


storeCatalogueObject([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);