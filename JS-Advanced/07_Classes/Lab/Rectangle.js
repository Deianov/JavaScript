class Rectangle {
    constructor(width, height, color) {
        this._height = height;
        this.color = color;
        function save() {
            this.width = width
        }
        this.getWidth = () => width;
    }
    calcArea() {
        return this.getWidth() * this._height
    }
    get area() {
        return this.calcArea()
    }
    get height() {
        return this._height
    }
}

// test
let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.getWidth());
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
console.log(rect.area);

