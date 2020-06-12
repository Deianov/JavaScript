// Vector Math
// •	add(vec1, vec2)         - Addition of two vectors
// •	multiply(vec1, scalar)  - Scalar multiplication
// •	length(vec1)            - Vector length
// •	dot(vec1, vec2)         - Dot product of two vectors
// •	cross(vec1, vec2)       - Cross product of two vectors


const solution =
(function vectorMath() {

    function Vector(arr) {
        this.x = arr[0];
        this.y = arr[1];
        this.value = () => [this.x, this.y];
        this.add = function (b) {
            this.x += b.x;
            this.y += b.y;
            return this.value()
        };
        this.multiply = function (n) {
            this.x *= n;
            this.y *= n;
            return this.value()
        };
        this.length = () => Math.sqrt((this.x * this.x) + (this.y * this.y));
        this.dot = function (b) {
            return (this.x * b.x) + (this.y * b.y)
        };
        this.cross = function (b) {
            return (this.x * b.y) - (this.y * b.x)
        }
    }

    return {
        add: (a, b) => new Vector(a).add(new Vector(b)),
        multiply: (a, n) => new Vector(a).multiply(n),
        length: (a) => new Vector(a).length(),
        dot: (a, b) =>  new Vector(a).dot(new Vector(b)),
        cross: (a, b) => new Vector(a).cross(new Vector(b))
    }
}());

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));