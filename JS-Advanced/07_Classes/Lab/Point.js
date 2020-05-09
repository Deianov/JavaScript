class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // pythagoras theorem
    // a ** 2 + b ** 2 = c ** 2
    // c = Math.sqrt(a ** 2 + b ** 2)
    // a = Math.sqrt(c ** 2 - b ** 2)
    // b = Math.sqrt(c ** 2 - a ** 2)
    static distance(p1, p2) {
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
    static distanceES2015(p1, p2) {
        return Math.hypot(p2.x - p1.x, p2.y - p1.y);
    }
}

// test
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
console.log(Point.distanceES2015(p1, p2));

let p3 = new Point(5, -5);
let p4 = new Point(-5, -5);
console.log(Point.distance(p3, p4));
console.log(Point.distanceES2015(p3, p4));
