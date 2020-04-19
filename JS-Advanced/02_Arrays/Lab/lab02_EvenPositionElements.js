function evenPositions(args) {

    function isEvenIndex (element, index) { 
        return index % 2 === 0; 
    }

    console.log(args.filter(isEvenIndex).join(' '))
}

evenPositions(['20', '30', '40']);