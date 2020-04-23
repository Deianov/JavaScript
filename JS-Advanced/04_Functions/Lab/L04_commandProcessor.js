function solution() {
    let text = '';

    function textAppend(s) {
        text += s
    }

    function textRemoveFirst(n) {
        text = text.substring(n)
    }

    function textRemoveEnd(n) {
        text = text.substring(0, text.length - n)
    }

    function textPrint() {
        console.log(text)
    }

    return {
        append: textAppend,
        removeStart: textRemoveFirst,
        removeEnd: textRemoveEnd,
        print: textPrint
    }
}

// test
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

