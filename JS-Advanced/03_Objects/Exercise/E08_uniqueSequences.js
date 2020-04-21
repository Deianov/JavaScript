function uniqueSequences(args) {

    const unique = new Map();

    for (let i = 0; i < args.length; i++) {

        const sorted = JSON.parse(args[i]).map(Number).sort((a, b) => b - a);
        const keyString = `[${sorted.join(', ')}]`;

        if (!unique.has(keyString)) {
            unique.set(keyString, sorted.length)
        }
    }

    const uniqueSorted = [...unique.keys()].sort((a, b) => unique.get(a) - unique.get(b));

    console.log(uniqueSorted.join('\n'))
}

uniqueSequences([
"[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]);