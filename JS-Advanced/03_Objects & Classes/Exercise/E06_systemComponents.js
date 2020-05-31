function systemComponents(args) {

    const parsedData = args.reduce((acc, componentString) => {
        const [systemName, componentName, subcomponentName] = componentString.split(' | ');

        if (!acc[systemName]) {
            acc[systemName] = {[componentName]: [subcomponentName]};
            return acc;
        }

        if (!acc[systemName][componentName]) {
            acc[systemName][componentName] = [subcomponentName];
            return acc;
        }

        acc[systemName][componentName] = [...acc[systemName][componentName], subcomponentName];
        return acc;
    }, {});

    const sortedSystems = Object.keys(parsedData).sort((a, b) => {
        const lenA = Object.keys(parsedData[a]).length;
        const lenB = Object.keys(parsedData[b]).length;
        return  lenB - lenA || a.localeCompare(b)
    });

    for (const sortedSystem of sortedSystems) {
        console.log(sortedSystem);

        for (const sortedComponent of sortComponents(sortedSystem)) {
            console.log(`|||${sortedComponent}`);

            parsedData[sortedSystem][sortedComponent].forEach(subComponent => {
                console.log(`||||||${subComponent}`)
            })
        }
    }

    function sortComponents(systemName) {
        return Object.keys(parsedData[systemName]).sort(function (a, b) {
            const lenA = Object.keys(parsedData[systemName][a]).length;
            const lenB = Object.keys(parsedData[systemName][b]).length;
            return lenB - lenA || a.localeCompare(b)
        })
    }
}

// {
//     SULS: {
//         'Main Site': [ 'Home Page', 'Login Page', 'Register Page' ],
//         'Judge Site': [ 'Login Page', 'Submittion Page' ],
//         'Digital Site': [ 'Login Page' ]
//     },
//     Lambda: {
//          CoreA: [ 'A23', 'A24', 'A25' ],
//          CoreB: [ 'B24' ],
//          CoreC: [ 'C4' ] },
//     Indice: { Session: [ 'Default Storage', 'Default Security' ] }
// }

systemComponents([
'SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);