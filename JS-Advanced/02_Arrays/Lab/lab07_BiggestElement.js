function biggestElement(args) {

    const result = getMax(args.map(getMax));

    function getMax(arr) {
        return Math.max.apply(null, arr)
    }

    console.log(result)
}

biggestElement([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]);