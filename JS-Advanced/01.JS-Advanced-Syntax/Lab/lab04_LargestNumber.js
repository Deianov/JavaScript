function solve(num1, num2, num3){
    let result = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
    
        if(element > result){
            result = element;
        }
    }

   console.log(`The largest number is ${result}.`); 
}

solve(-3, -5, -22.5);