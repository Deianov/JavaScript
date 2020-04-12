function  equalNeighbors(args) {

    let equals = 0

    for (let i = 0; i < args.length - 1; i++) {

        const row1 = args[i];
        const row2 = args[i + 1];
        const len = row1.length

        for (let c = 0; c < len; c++) {

            if (row1[c] == row2[c]){
                equals++
            }
        }

        for (let c = 0; c < len - 1; c++) {

            if ( i == 0 && row1[c] == row1[c + 1]) {
                equals++
            }
            if (row2[c] == row2[c + 1]){
                equals++
            }
        }
    }
    console.log(equals)
}

equalNeighbors(
    [
        ['test', 'yes', 'yo', 'ho'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']
    ])