function rotateArray(args) {

    let count = parseInt(args[args.length - 1])
    const arr = args.slice(0, args.length - 1)

    const len = arr.length
    const lastIndex = len - 1

    count = count % len

    while (count-- > 0) {
        for (let i = 0; i < lastIndex; i++) {
            swap(arr, i, lastIndex)
        }
    }    

    function swap(array, a, b) {
        const temp = array[a]
        array[a] = array[b]
        array[b] = temp
    }

    console.log(arr.join(' '))
}

rotateArray([
'1', 
'2', 
'3', 
'4', 
'2'])