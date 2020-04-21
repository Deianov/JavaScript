function unique(args) {

    const result = args.map((num, i, arr) => {
        const check = [...arr.slice(0, i), ...arr.slice(i + 1)];

        if (check.includes(num)) {
            return num
        }
    });

    const distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    };

    console.log(result.filter(Boolean).filter(distinct))
}

unique([1, 9, 3, 9, 4, 5, 6]);