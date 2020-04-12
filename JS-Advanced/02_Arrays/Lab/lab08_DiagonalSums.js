function diagonalSums(args) {

    let leftIndex = 0
    let leftSum = 0
    let rightIndex = args[0].length - 1
    let rightSum = 0

    args.forEach(row => {
        leftSum += row[leftIndex++]
        rightSum += row[rightIndex--]
    });

    console.log(`${leftSum} ${rightSum}`)
}

diagonalSums([[3, 5, 17],[-1, 7, 14],[1, -8, 89]])