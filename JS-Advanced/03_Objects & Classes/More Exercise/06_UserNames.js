function userNames(args) {

    const uniqueNames = new Set(args);

    const sortedNames = [...uniqueNames.values()].sort(function (a, b) {
       return  a.length - b.length || a.localeCompare(b)
    });

    console.log(sortedNames.join('\n'))
}

userNames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']
);