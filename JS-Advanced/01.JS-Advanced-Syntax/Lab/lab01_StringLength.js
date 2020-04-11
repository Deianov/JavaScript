function solve(a, b, c) {
    let sumLength;
    let averageLength;

    sumLength = a.length + b.length + c.length;
    averageLength = Math.floor(sumLength / 3.0);

    console.log(sumLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');

