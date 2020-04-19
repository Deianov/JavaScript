function lastKNumbers(n, k) {
    
    const result = [1];

    for (let i = 1; i < n; i++) {
        result.push(getSum(getLastK(result, k)))
    }

    function getSum(arr) {
        return arr.reduce((a, c) => a + c, 0)
    }

    function getLastK(arr, k) {
        const len = arr.length;
        return arr.slice(len > k ? len - k: 0, len)
    }

    console.log(result.join(' '))
}

lastKNumbers(8, 2);