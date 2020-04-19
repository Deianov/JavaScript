function townsToJSON(args) {

    const data = args.slice();
    const keys = data.shift().split('|').map(e => e.trim()).filter(Boolean);

    const towns = data.reduce((acc, townString) => {

        const values = townString.split('|').map(e => e.trim()).filter(Boolean);
        const town = {};

        town[keys[0]] = values[0];
        town[keys[1]] = setPrecision(values[1], 2);
        town[keys[2]] = setPrecision(values[2], 2);

        return [...acc, town];
    }, []);

    function setPrecision(n, p) {
        return Math.round(Number(n) * 10 ** p) / 10 ** p;
    }

    return JSON.stringify(towns)
}

console.log(townsToJSON([
'| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']));