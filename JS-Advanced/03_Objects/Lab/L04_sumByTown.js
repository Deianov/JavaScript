function sumByTown(args) {

    const result = {}

    for (let i = 0; i < args.length - 1; i += 2) {

        const key = args[i]
        const value = Number(args[i + 1])

        if (result.hasOwnProperty(key)) {
            result[key] += value
        } else {
            result[key] = value
        }
    }
    console.log(JSON.stringify(result))
}

sumByTown([
'Sofia',
'20',
'Varna',
'3',
'sofia',
'5',
'varna',
'4'])