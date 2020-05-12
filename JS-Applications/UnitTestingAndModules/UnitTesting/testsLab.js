const expect = require('chai').expect;
const assert = require('chai').assert;

// Lab: Unit Testing and Modules
// 04. Sum of Numbers
const sum = require('./Lab/04_SumOfNumbers').sum;

describe('sum(arr)', function () {
  it('should return 3 for [1, 2]', function () {
    expect(sum([1, 2])).to.be.equal(3);
  });
  it('should return 1 for [1]', function () {
    expect(sum([1])).to.be.equal(1);
  });
  it('should return 0 for empty array', function () {
    expect(sum([])).to.be.equal(0);
  });
  it('should return 3 for [1.5, 2.5, -1]', function () {
    expect(sum([1.5, 2.5, -1])).to.be.equal(3);
  });
  it('should return NaN for invalid data', function () {
    expect(sum(['invalid'])).to.be.NaN;
  });
});


// 05. Check for Symmetry
const isSymmetric = require('./Lab/05_CheckForSymmetry').isSymmetric;

describe('isSymmetric(arr) ', function () {
  it('should return true for [1,2,3,3,2,1]', function () {
    const input = [1, 2, 3, 3, 2, 1];
    const result = isSymmetric(input);
    assert.isTrue(result);
  });
  it('should return false for [1,2,3,4,2,1]', function () {
    const input = [1, 2, 3, 4, 2, 1];
    const result = isSymmetric(input);
    assert.isFalse(result);
  });
  it('should return true for [-1,2,-1]', function () {
    const input = [-1, 2, -1];
    const result = isSymmetric(input);
    assert.isTrue(result);
  });
  it('should return false for [-1,2,1]', function () {
    const input = [-1, 2, 1];
    const result = isSymmetric(input);
    assert.isFalse(result);
  });
  it('should return false for [1,2]', function () {
    const input = [1, 2];
    const result = isSymmetric(input);
    assert.isFalse(result);
  });
  it('should return true for [1]', function () {
    const input = [1];
    const result = isSymmetric(input);
    assert.isTrue(result);
  });
  it('should return true for [5,\'hi\',{a:5},new Date(),{a:5},\'hi\',5]', function () {
    const input = [5, 'hi', {a: 5}, new Date(), {a: 5}, 'hi', 5];
    const result = isSymmetric(input);
    assert.isTrue(result);
  });
  it('should return false for [5,\'hi\',{a:5},new Date(),{X:5},\'hi\',5]', function () {
    const input = [5, 'hi', {a: 5}, new Date(), {X: 5}, 'hi', 5];
    const result = isSymmetric(input);
    assert.isFalse(result);
  });
  it('should return false for 1,2,2,1 (not an array)', function () {
    const result = isSymmetric(1, 2, 2, 1);
    assert.isFalse(result);
  });
});


// 06. RGB to Hex 
const rgbToHexColor = require('./Lab/06_RGBtoHex').rgbToHexColor;

describe('rgbToHexColor(red, green, blue)', function () {
  describe('Valid input', function () {
    it('should return #FF9EAA on (255, 158, 170)', function () {
      const hex = rgbToHexColor(255, 158, 170);
      assert.equal(hex, '#FF9EAA');
    });
    it('should return #000000 on (0, 0, 0)', function () {
      const hex = rgbToHexColor(0, 0, 0);
      assert.equal(hex, '#000000');
    });
    it('should return #0C0D0E on (12, 13, 14)', function () {
      const hex = rgbToHexColor(12, 13, 14);
      assert.equal(hex, '#0C0D0E');
    });
    it('should return #FFFFFF on (255, 255, 255)', function () {
      const hex = rgbToHexColor(255, 255, 255);
      assert.equal(hex, '#FFFFFF');
    });
  });
  describe('Invalid input', function () {
    it('should return undefined on (-1, 0, 0)', function () {
      const hex = rgbToHexColor(-1, 0, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, -1, 0)', function () {
      const hex = rgbToHexColor(0, -1, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, 0, -1)', function () {
      const hex = rgbToHexColor(0, 0, -1);
      assert.isUndefined(hex,);
    });

    it('should return undefined on (256, 0, 0)', function () {
      const hex = rgbToHexColor(256, 0, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, 256, 0)', function () {
      const hex = rgbToHexColor(0, 256, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, 0, 256)', function () {
      const hex = rgbToHexColor(0, 0, 256);
      assert.isUndefined(hex,);
    });

    it('should return undefined on (3.14, 0, 0)', function () {
      const hex = rgbToHexColor(3.14, 0, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, 3.14, 0)', function () {
      const hex = rgbToHexColor(0, 3.14, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, 0, 3.14)', function () {
      const hex = rgbToHexColor(0, 0, 3.14);
      assert.isUndefined(hex,);
    });

    it('should return undefined on ("5", [3], {8:9})', function () {
      const hex = rgbToHexColor('5', [3], {8: 9});
      assert.isUndefined(hex,);
    });

    it('should return undefined on (empty input)', function () {
      const hex = rgbToHexColor();
      assert.isUndefined(hex,);
    });
  });
});

// 07. Add | Subtract
const createCalculator = require('./Lab/07_AddOrSubtract').createCalculator;

describe('createCalculator()', () => {
  let calc;

  beforeEach(() => {
    calc = createCalculator();
  });

  it('should return object with all properties as functions', () => {
    const properties = ['get', 'add', 'subtract'];

    assert.isObject(calc);

    assert.containsAllKeys(calc, properties);

    Object.keys(calc).forEach((key) => {
      assert.isFunction(calc[key]);
    });
  });

  it('should return object', () => {
    assert.isObject(calc);
  });

  /*
    it('should have get() function', () => {
      const hasProp = calc.hasOwnProperty('get');
      assert.isTrue(hasProp);
      assert.isFunction(calc.get);
    });

    it('should have subtract() function', () => {
      const hasProp = calc.hasOwnProperty('subtract');
      assert.isTrue(hasProp);
      assert.isFunction(calc.subtract);
    });

    it('should have add() function', () => {
      const hasProp = calc.hasOwnProperty('add');
      assert.isTrue(hasProp);
      assert.isFunction(calc.add);
    });
  */

  it('should return 0 after create', () => {
    const value = calc.get();
    assert.equal(value, 0);
  });

  it('should return 5 after {add 3; add 2}', () => {
    calc.add(3);
    calc.add(2);
    const value = calc.get();
    assert.equal(value, 5);
  });

  it('should return -5 after {subtract 3; subtract 2}', () => {
    calc.subtract(3);
    calc.subtract(2);
    const value = calc.get();
    assert.equal(value, -5);
  });

  it('should return 4.2 after {add 5.3; subtract 1.1}', () => {
    calc.add(5.3);
    calc.subtract(1.1);
    const value = calc.get();
    assert.closeTo(value, 4.2, 0.00000001);
  });

  it('should return 2 after {add 10; subtract \'7\'\' add \'-2\'; subtract -1}', () => {
    calc.add(10);
    calc.subtract('7');
    calc.add('-2');
    calc.subtract(-1);
    const value = calc.get();
    assert.equal(value, 2);
  });

  it('should return NaN after {add \'hello\'}', () => {
    calc.add('hello');
    const value = calc.get();
    assert.isNaN(value);
  });

  it('should return NaN after {subtract \'hello\'}', () => {
    calc.subtract('hello');
    const value = calc.get();
    assert.isNaN(value);
  });

  it('should return NaN after {add (empty input)}', () => {
    calc.add();
    const value = calc.get();
    assert.isNaN(value);
  });

  it('should return NaN subtract {add (empty input)}', () => {
    calc.subtract();
    const value = calc.get();
    assert.isNaN(value);
  });
});