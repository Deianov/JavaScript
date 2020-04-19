function negativePositiveNumbers(args) {

    const result = [];

    args.forEach(e => e >= 0 ? result.push(e) : result.unshift(e) );

    result.forEach(e => console.log(e))
}

negativePositiveNumbers([3, -2, 0, -1]);