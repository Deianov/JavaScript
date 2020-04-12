function validityChecker(args) {

    const points = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        distance: function(px1, py1, px2, py2) {
            return Math.sqrt( (px2 - px1) * (px2 - px1) + (py2 - py1) * (py2 - py1) )
        },
        isValid: function(n) {
            return Number.isInteger(n) ? 'valid' : 'invalid'
        },
        validate: function() {
            console.log(`{${this.x1}, ${this.y1}} to {0, 0} is ${this.isValid(this.distance(this.x1, this.y1, 0, 0))}`)
            console.log(`{${this.x2}, ${this.y2}} to {0, 0} is ${this.isValid(this.distance(this.x2, this.y2, 0, 0))}`)
            console.log(`{${this.x1}, ${this.y1}} to {${this.x2}, ${this.y2}} is ${this.isValid(this.distance(this.x1, this.y1, this.x2, this.y2))}`)
        }
    }

    points.x1 = args[0]
    points.y1 = args[1]
    points.x2 = args[2]
    points.y2 = args[3]

    points.validate()
}

validityChecker([2, 1, 1, 1])