function sortByCriterias(args) {

    const result = args.slice();

    result.sort(function(a, b) {
        let comp = compareLengths(a, b);
        return comp === 0 ? compareAlphabetical(a, b) : comp;
    });

    function compareAlphabetical(a, b) {
        return a.toLocaleUpperCase().localeCompare(b.toLocaleUpperCase())
    }

    function compareLengths(a, b) {
        return a.length - b.length
    }

    console.log(result.join('\n'))
}

sortByCriterias([
'alpha', 
'beta', 
'gamma']);