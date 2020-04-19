function addAndRemoveElements(args) {

    let number = 1;
    const result = [];

    args.forEach(element => {
        if (element === 'add') {
            result.push(number++)
        } else if (element === 'remove') {
            result.pop();
            number++
        }
    });

    console.log(result.length !== 0 ? result.join('\n') : 'Empty')
}

addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);