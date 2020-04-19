function countWordsInText(args) {

    const wordsCount = {};

    for (const sentence of args) {

        const words = args[0].split(/[^\w]+/g).filter(Boolean);

        for (const word of words) {
            if (wordsCount.hasOwnProperty(word)) {
                wordsCount[word]++
            } else {
                wordsCount[word] = 1
            }
        }
    }
    console.log(JSON.stringify(wordsCount))
}

countWordsInText(['Far too slow, you\'re far too slow.']);