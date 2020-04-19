function extractIncreasingSubsequence(args) {

    const result = args.reduce((acc, currElement) => {

        const lastElement = acc[acc.length - 1];

        if (currElement >= lastElement || acc.length === 0) {
            acc.push(currElement)
        }

        return acc;

    }, []);

    console.log(result.join('\n'))
}

extractIncreasingSubsequence([
1, 
3, 
8, 
4, 
10, 
12, 
3, 
2, 
24]);