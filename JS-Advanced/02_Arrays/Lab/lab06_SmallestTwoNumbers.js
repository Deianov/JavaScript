function smallestTwoNumbers(args) {
    const result = args.sort((a, b) => a - b).filter((e, index) => index < 2);
    console.log(result.join(' '))
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);