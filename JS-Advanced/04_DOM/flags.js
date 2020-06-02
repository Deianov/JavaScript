
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

function test() {

    const flags = {
        a: 1,
        b: 2,
        c: 4,
        d: 8,
        e: 16,
        f: 32,
        g: 64
    };

    let flag = new Flag();

    flag.true(flags.a);
    flag.true(flags.c);
    flag.true(flags.g);
    flag.true(flags.f);
    flag.change(flags.f);

    console.log(flag.number);

    for (const key in flags) {
        console.log(`flag: ${ key } = ${ (flag.isTrue(flags[key])) }`)
    }
}

test();

function Flag(n) {
    this.number = parseInt(n) || 0;
    this.isTrue = (flag) => (this.number & flag) > 0;
    this.isFalse = (flag) => (this.number & flag) === 0;
    this.true = (flag) => this.number += this.isTrue(flag) ? 0 : flag;
    this.false = (flag) => this.number -= this.isTrue(flag) ? flag : 0;
    this.change = (flag) => this.number += this.isTrue(flag) ? (flag * -1) : flag;
}