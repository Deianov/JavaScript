function sumFirstLast(args) {

    if (args.length > 1) {
        let first = parseFloat(args[0]);
        let last = parseFloat(args[args.length - 1]);
        console.log(first + last)
    } else {
        console.log(args[0] * 2 || 0)
    }
}

sumFirstLast([5]);