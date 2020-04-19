function calorieObjects(elements) {

    let result = {};

    for (let i = 0; i < elements.length; i+=2) {

        result[elements[i]] = parseInt(elements[i + 1]);
    }

    console.log(result);
}

function calorieObjects2(elements) {
    return elements.reduce((acc, x, i, arr) => {
        if(i % 2 === 0){
            acc[x] = undefined;
        } else {
            acc[arr[i - 1]] = x;
        }
        return acc;
    } ,{})
   
}


calorieObjects(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
console.log(calorieObjects2(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]));