function sumNumbers(num) {

    let isEquals = true;
    let sum = 0;

    if(typeof num != 'number') {
        console.log(false);
        return;
    }

    let n = Math.abs(num);
    let lastDigit = num % 10;

    while(n > 0) {

        const digit = n % 10;
        n = Math.trunc(n / 10);

        sum += digit;
        isEquals = isEquals ? lastDigit === digit : false;
    }

    console.log(isEquals);
    console.log(sum);
}

sumNumbers(55);