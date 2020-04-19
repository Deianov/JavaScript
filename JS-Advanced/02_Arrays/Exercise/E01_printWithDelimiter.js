function printWithDelimiter(args) {

    const del = args.pop();
    console.log(args.join(del))
}

printWithDelimiter([
'How about no?',
'I',
'will', 
'not', 
'do', 
'it!', 
'_']);