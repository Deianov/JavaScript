function argumentInfo() {
    const counts = {};

    for (const arg of arguments) {
        const type = typeof(arg);
        console.log(`${type}: ${arg}`);

        if (!counts.hasOwnProperty(type)) {
            counts[type] = 0;
        }
        counts[type]++;
    }

    function compareByCounts(a, b) {
        return counts[b] - counts[a]
    }

    function print(key) {
        console.log(`${key} = ${counts[key]}`)
    }

    Object.keys(counts).sort(compareByCounts).forEach(print);
}

argumentInfo(42, 'cat', [], undefined);