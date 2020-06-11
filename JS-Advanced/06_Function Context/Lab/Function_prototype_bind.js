// Function.prototype.bind()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

const obj = {
    x: 42,
    getX: function() {
      return this.x;
    }
};

const unboundGetX = obj.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(obj);
console.log(boundGetX());
// expected output: 42