function solve(input) {

    if(typeof(input) === 'string') {

        const pattern = new RegExp(/[^A-Z0-9]+/);
        const words = input.toUpperCase().split(pattern).filter(Boolean);
        
        console.log(words.join(', '));
    }
}

solve('Hi, how are you?');