class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2
    }
    set diameter(d){
        this.radius = d / 2;
    }
    get area() {
       return  Math.PI * this.radius * this.radius;
    }
    get change() {
        this.radius *= 2;
        return this
    }
}

// test
let circle = new Circle(2);
console.log(`Radius: ${circle.radius}`);
console.log(`Diameter: ${circle.diameter}`);
console.log(`Area: ${circle.area}`);
circle.diameter = 1.6;
console.log(`Radius: ${circle.radius}`);
console.log(`Diameter: ${circle.diameter}`);
console.log(`Area: ${circle.area}`);

console.log(`Radius: ${circle.change.change.radius}`);
