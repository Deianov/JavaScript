function printEveryNElement(args) {

    const step = parseInt(args.pop());

    for (let i = 0; i < args.length; i += step) {
        console.log(args[i])
    }
}

printEveryNElement([
'5',
'20', 
'31', 
'4', 
'20', 
'2']);