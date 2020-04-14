function magicMatrices(args) {

    const checkSum = getSum(args[0])
    const rows = args.length
    const cols = args[0].length

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        const row = args[rowIndex]
        if (getSum(row) != checkSum) {
            console.log(false)
            return
        }
    }

    for (let colIndex = 0; colIndex < cols; colIndex++) {
        let colSum = 0
        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            colSum += args[rowIndex][colIndex]
        }
        if (colSum != checkSum) {
            console.log(false)
            return
        }
    }
    
    function getSum(array) {
        return array.reduce( (a, b) => a + b)
    }

    console.log(true)
}

magicMatrices([
[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])