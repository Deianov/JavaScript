const expect = require('chai').expect;
const assert = require('chai').assert;

// Exercise: Unit Testing and Modules
// 02. Even Or Odd
const isOddOrEven = require('./Exercise/02_EvenOrOdd').isOddOrEven;

describe('isOddOrEven()', (() => {
  it('with a number parameter, should return undefined', function () {
    expect(isOddOrEven(13)).to.equal(undefined, 'Function did not return the correct result!');
  });
  it('with a object parameter, should return undefined', function () {
    assert.equal(isOddOrEven({name: 'Alexa'}), undefined, 'Function did not return correct result!');
  });
  it('with an even length string should return "even"', function () {
    assert.equal(isOddOrEven('roar'), 'even', 'Function did not return correct result!');
  });
  it('with an odd length string, should return "odd"', function () {
    expect(isOddOrEven('Alexa')).to.equal('odd', 'Function did not return correct result!');
  });
  it('with multiple consecutive checks, should return correct values', function () {
    expect(isOddOrEven('cat')).to.equal('odd', 'Function did not return correct result!');
    expect(isOddOrEven('dog')).to.equal('odd', 'Function did not return correct result!');
    expect(isOddOrEven('fish')).to.equal('even', 'Function did not return correct result!');
  });
}));

// 03. Char Lookup
const lookupChar = require('./Exercise/03_CharLookup').lookupChar;

describe('lookupChar()', function () {
  it('with a non-string first parameter should return undefined', function () {
    expect(lookupChar(13, 0)).to.equal(undefined, 'The function did not return correct result');
  });
  it('with a non-string second parameter should return undefined', function () {
    expect(lookupChar('Alexa', 'gosho')).to.equal(undefined, 'The function did not return correct result');
  });
  it('with a floating point number second parameter should return undefined', function () {
    expect(lookupChar('Alexa', 3.12)).to.equal(undefined, 'The function did not return correct result');
  });
  it('with an incorrect index value should return incorrect index', function () {
    expect(lookupChar('gosho', 13)).to.equal('Incorrect index', 'The function did not return correct result');
  });
  it('with a negative index value should return incorrect index', function () {
    expect(lookupChar('stamat', -1)).to.equal('Incorrect index', 'The function did not return correct result');
  });
  it('with an index value equal to string length, should return incorrect index', function () {
    expect(lookupChar('Alexa', 5)).to.equal('Incorrect index', 'The function did not return correct result');
  });
  it('with correct parameters, should return correct value', function () {
    expect(lookupChar('Alexa', 0)).to.equal('A', 'The function did not return correct result');
  });
  it('with correct parameters should return correct value', function () {
    expect(lookupChar('stamat', 3)).to.equal('m', 'The function did not return correct result');
  });
});

// 04. Math Enforcer
const mathEnforcer = require('./Exercise/04_MathEnforcer').mathEnforcer;

describe('mathEnforcer()', () => {

    describe('check undefined cases', () => {
      it('should return undefined from addFice("7")', function () {
        expect(mathEnforcer.addFive('7')).to.be.undefined;
      });
  
      it('should return undefined from subtractTen([11])', function () {
        expect(mathEnforcer.subtractTen([11])).to.be.undefined;
      });
  
      it('should return undefined from sum(1, "2")', function () {
        expect(mathEnforcer.sum(1, '2')).to.be.undefined;
      });
  
      it('should return undefined from sum("1", 10)', function () {
        expect(mathEnforcer.sum({}, 10)).to.be.undefined;
      });
    });
  
    describe('check \'add\' cases which should work', () => {
      it('should return 11 from addFive(6)', function () {
        expect(mathEnforcer.addFive(6)).to.be.equal(11);
      });
  
      it('should return 0 from addFive(-5)', function () {
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
      });
  
      it('should return 6.1 from addFive(1.1)', function () {
        expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
      });
    });
  
    describe('check \'subtract\' cases which should work', () => {
      it('should return 90 from subtractTen(100)', function () {
        expect(mathEnforcer.subtractTen(100)).to.be.equal(90);
      });
  
      it('should return -15 from subtractTen(-5)', function () {
        expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
      });
  
      it('should return -0.1 from subtractTen(9.9)', function () {
        expect(mathEnforcer.subtractTen(9.9)).to.be.closeTo(-0.1, 0.01);
      });
    });
  
    describe('check \'sum\' cases which should work', () => {
      it('should return 0.3 from sum(0.1,0.2)', function () {
        expect(mathEnforcer.sum(0.1, 0.2)).to.be.closeTo(0.3, 0.01);
      });
  
      it('should return 18 from sum(9,9)', function () {
        expect(mathEnforcer.sum(9, 9)).to.be.equal(18);
      });
  
      it('should return -550 from sum(-600,50)', function () {
        expect(mathEnforcer.sum(-600, 50)).to.be.equal(-550);
      });
  
      it('should return -550 from sum(600,-50)', function () {
        expect(mathEnforcer.sum(600, -50)).to.be.equal(550);
      });
    });
  });


  // 05. StringBuilder 
  // by Hristo Nakov
  // https://github.com/HristoNakov13/SoftUni-Javascript/blob/master/Advanced/UnitTesting/String%20Builder/string-builder-tests.js
  const StringBuilder = require('./Exercise/05_StringBuilder').StringBuilder;

  describe("StringBuilder()", function() {
    const INVALID_TYPE_PARAM = 50.5;
    const EXPECTED_ERROR = new TypeError('Argument must be string');
    const INITIAL_STRING = "Hello";
    const EXPECTED_THROW_MESSAGE = EXPECTED_ERROR.message;

    let stringBuilder;
    beforeEach(function () {
        stringBuilder = new StringBuilder(INITIAL_STRING);
    });

    
    describe("can be instantiated with a passed string or without any params", function() {
    const EXPECTED_ERROR_NAME = EXPECTED_ERROR.name;
    const EMPTY_STRING = "";

        it ("can be instantiated with empty constructor", function() {
            let strB = new StringBuilder();
            let actual = strB.toString();
    
            expect(actual).to.be.equal(EMPTY_STRING);
        });

        it ("can be instantiated with String parameter", function() {
            let strB = new StringBuilder(INITIAL_STRING);
            let actual = strB.toString();
    
            expect(actual).to.be.equal(INITIAL_STRING);
        });

        it("should throw when instantiating with type of paramater different than String", function() {
            let throwMessage;
            let errorName;

            try {
                let test = new StringBuilder(INVALID_TYPE_PARAM);
            } catch(err) {
                throwMessage = err.message;
                errorName = err.name;
            }

            expect(throwMessage).to.be.equal(EXPECTED_THROW_MESSAGE);           
            expect(errorName).to.be.equal(EXPECTED_ERROR_NAME);
        });
    });

    describe('StringBuilder has all functions present', function () {
        it("has function 'append'", function () {
            expect(typeof StringBuilder.prototype.append).to.be.equal("function");
        });

        it("has function 'prepend'", function () {
            expect(typeof StringBuilder.prototype.prepend).to.be.equal("function");
        });

        it("has function 'insertAt'", function () {
            expect(typeof StringBuilder.prototype.insertAt).to.be.equal("function");
        });

        it("has function 'remove'", function () {
            expect(typeof StringBuilder.prototype.remove).to.be.equal("function");
        });

        it("has function 'toString'", function () {
            expect(typeof StringBuilder.prototype.toString).to.be.equal("function");
        });

        it("toString returns correct value", function () {
            expect(stringBuilder.toString()).to.equal(INITIAL_STRING)
        });
    });

    const TEST_STRING = "Ivan";

    describe("testing function 'append'", function() {   
        const EXPECTED_RESULT = INITIAL_STRING + TEST_STRING;

        it("should throw when parameter type of is not 'String'", function() {
            expect(() => stringBuilder.append(INVALID_TYPE_PARAM)).to.throw(EXPECTED_THROW_MESSAGE);
        });

        it("should correctly add given string at the end of initial string", function() {
            stringBuilder.append(TEST_STRING);
            let actual = stringBuilder.toString();

            expect(actual).to.be.equal(EXPECTED_RESULT);
        });
    });

    describe("testing function 'prepend'", function() {
        const EXPECTED_RESULT = TEST_STRING + INITIAL_STRING;

        it("should throw when parameter type of is not 'String'", function() {
            expect(() => stringBuilder.prepend(INVALID_TYPE_PARAM)).to.throw(EXPECTED_THROW_MESSAGE);
        });

        it("should correctly add given string at the begining of initial string", function() {
            stringBuilder.prepend(TEST_STRING);
            let actual = stringBuilder.toString();

            expect(actual).to.be.equal(EXPECTED_RESULT);
        });
    });

    describe("testing function 'insertAt'", function() {
        const START_INDEX = INITIAL_STRING.length - 2;
        const EXPECTED_RESULT = INITIAL_STRING.substring(0, START_INDEX) + TEST_STRING + INITIAL_STRING.substring(START_INDEX);

        it("should throw when parameter type of is not 'String'", function() {
            expect(() => stringBuilder.insertAt(INVALID_TYPE_PARAM)).to.throw(EXPECTED_THROW_MESSAGE);
        });

        it("should correctly insert given string at given index of initial string", function() {
            stringBuilder.insertAt(TEST_STRING, START_INDEX);
            let actual = stringBuilder.toString();

            expect(actual).to.be.equal(EXPECTED_RESULT);
        });
    });

    describe("testing function 'remove'", function() {
        const stringBuilder = new StringBuilder(INITIAL_STRING);
        const START_INDEX = 1;
        const DELETE_CHARS_COUNT = 2;
        const EXPECTED_RESULT = INITIAL_STRING.substring(0, START_INDEX) + INITIAL_STRING.substring(START_INDEX + DELETE_CHARS_COUNT);

        it("should throw when parameter type of is not 'String'", function() {
            expect(() => stringBuilder.insertAt(INVALID_TYPE_PARAM)).to.throw(EXPECTED_THROW_MESSAGE);
        });

        it("should correctly remove characters from initial string in the range from given start to end indeces", function() {
            stringBuilder.remove(START_INDEX, DELETE_CHARS_COUNT);
            let actual = stringBuilder.toString();

            expect(actual).to.be.equal(EXPECTED_RESULT);
        });
    });

    describe('testing functionality with empty initial string', function(){
        it('consecutive calling all functions', function() {
            const emptySB = new StringBuilder();
            const APPEND = "2";
            const PREPEND = "1";
            const START_INDEX = 2;
            const DELE_CHARS_COUNT = INITIAL_STRING.length;
            const EXPECTED_RESULT = PREPEND + APPEND;

            emptySB.prepend(PREPEND);
            emptySB.insertAt(INITIAL_STRING, START_INDEX);
            emptySB.append(APPEND);
            emptySB.remove(START_INDEX - 1, DELE_CHARS_COUNT);
    
            let actual = emptySB.toString();

            expect(EXPECTED_RESULT).to.be.equal(actual);
        });
    });
});

// 06. Payment Package
// by Hristo Nakov
// https://github.com/HristoNakov13/SoftUni-Javascript/blob/master/Advanced/UnitTesting/Payment%20Package/payment-package-tests.js

const PaymentPackage = require('./Exercise/06_PaymentPackage').PaymentPackage;

describe("testing PaymentPackage", function() {
    describe("testing the presence of all functions", function() {
        it("has toString()", function() {
            assert.isFunction(PaymentPackage.prototype.toString);
        });
    });

    const VALID_NAME = "Transfer Fee";
    const VALID_VALUE = 100;

    const EMPTY_STRING = "";
    const NEGATIVE_NUMBER = -1;
    const INVALID_PARAMETER_TYPE = [1, 2];

    const DEFAULT_VAT = 20;
    const DEFAULT_ACTIVE = true;

    describe("testing instantiation", function() {
        it("should be instantiated with 2 parameters - name String and value number", function() {
            let paymentPackage = new PaymentPackage(VALID_NAME, VALID_VALUE);
            let actualName = paymentPackage.name;
            let actualValue = paymentPackage.value;
    
            expect(VALID_NAME).to.be.equal(actualName);
            expect(VALID_VALUE).to.be.equal(actualValue);
        });

        it("should be instantiated with correct default values", function() {
            let paymentPackage = new PaymentPackage(VALID_NAME, VALID_VALUE);
            let actualVAT = paymentPackage.VAT;
            let actualActive = paymentPackage.active;

            expect(DEFAULT_VAT).to.be.equal(actualVAT);
            expect(DEFAULT_ACTIVE).to.be.equal(actualActive);
        });

        describe("testing instantiation with invalid parameters", function() {
            describe("testing with invalid name", function() {
                const EMPTY_STRING_ERROR = new Error('Name must be a non-empty string');
                const EMPTY_STRING_ERROR_NAME = EMPTY_STRING_ERROR.name;
                const EMPTY_STRING_ERROR_MESSAGE = EMPTY_STRING_ERROR.message;

                const INVALID_TYPE_NAME_ERROR = new Error('Name must be a non-empty string');
                const INVALID_TYPE_NAME_ERROR_NAME = INVALID_TYPE_NAME_ERROR.name;
                const INVALID_TYPE_NAME_ERROR_MESSAGE = INVALID_TYPE_NAME_ERROR.message;

                it("should throw when name is an empty String", function() {
                    let actualErrorName;
                    let actualErrorMessage;

                    try {
                        let test = new PaymentPackage(EMPTY_STRING, VALID_VALUE);
                    } catch(err) {
                        actualErrorMessage = err.message;
                        actualErrorName = err.name;
                    }

                    expect(EMPTY_STRING_ERROR_MESSAGE).to.be.equal(actualErrorMessage);
                    expect(EMPTY_STRING_ERROR_NAME).to.be.equal(actualErrorName);
                });

                it("should throw when type of name parameter is not a 'String'", function() {
                    let actualErrorName;
                    let actualErrorMessage;

                    try {
                        let test = new PaymentPackage(INVALID_PARAMETER_TYPE, VALID_VALUE);
                    } catch(err) {
                        actualErrorMessage = err.message;
                        actualErrorName = err.name;
                    }

                    expect(INVALID_TYPE_NAME_ERROR_MESSAGE).to.be.equal(actualErrorMessage);
                    expect(INVALID_TYPE_NAME_ERROR_NAME).to.be.equal(actualErrorName);
                });
            });

            describe("testing with invalid 'value'", function() {
                const NEGATIVE_VALUE_ERROR = new Error('Value must be a non-negative number');
                const NEGATIVE_VALUE_ERROR_NAME = NEGATIVE_VALUE_ERROR.name;
                const NEGATIVE_VALUE_ERROR_MESSAGE = NEGATIVE_VALUE_ERROR.message;
    
                const INVALID_TYPE_VALUE_ERROR = new Error('Value must be a non-negative number');
                const INVALID_TYPE_VALUE_ERROR_NAME = INVALID_TYPE_VALUE_ERROR.name;
                const INVALID_TYPE_VALUE_ERROR_MESSAGE = INVALID_TYPE_VALUE_ERROR.message;

                it("should throw when value is a negative number", function() {
                    let actualErrorName;
                    let actualErrorMessage;

                    try {
                        let test = new PaymentPackage(VALID_NAME, NEGATIVE_NUMBER);
                    } catch(err) {
                        actualErrorMessage = err.message;
                        actualErrorName = err.name;
                    }

                    expect(NEGATIVE_VALUE_ERROR_MESSAGE).to.be.equal(actualErrorMessage);
                    expect(NEGATIVE_VALUE_ERROR_NAME).to.be.equal(actualErrorName);
                });

                it("should throw when type of parameter 'value' is not a 'number'", function() {
                    let actualErrorName;
                    let actualErrorMessage;

                    try {
                        let test = new PaymentPackage(VALID_NAME, NEGATIVE_NUMBER);
                    } catch(err) {
                        actualErrorMessage = err.message;
                        actualErrorName = err.name;
                    }

                    expect(INVALID_TYPE_VALUE_ERROR_MESSAGE).to.be.equal(actualErrorMessage);
                    expect(INVALID_TYPE_VALUE_ERROR_NAME).to.be.equal(actualErrorName);
                });
            });
        });
    });

    const VALID_VAT = 50;
    const VALID_ACTIVE_BOOLEAN_DIFFERENT_TAN_DEFAULT = false;

    describe("testing accessors for 'VAT' and 'active'", function() {
        describe("testing 'VAT'", function() {
            it("should set VAT with correct value", function() {
                let test = new PaymentPackage(VALID_NAME, VALID_VALUE);
                test.VAT = VALID_VAT;
                let actualVAt = test.VAT;

                expect(VALID_VAT).to.be.equal(actualVAt);
            });

            describe("testing set 'VAT' with invalid values", function() {
                const NEGATIVE_VAT_NUMBER_ERROR = new Error('VAT must be a non-negative number');
                const NEGATIVE_VAT_NUMBER_ERROR_NAME = NEGATIVE_VAT_NUMBER_ERROR.name;
                const NEGATIVE_VAT_NUMBER_ERROR_MESSAGE = NEGATIVE_VAT_NUMBER_ERROR.message;

                it("should throw when setting 'VAT' with negative number", function() {
                    let actualErrorName;
                    let actualErrorMessage;

                    try {
                        let test = new PaymentPackage(VALID_NAME, VALID_VALUE);
                        test.VAT = NEGATIVE_NUMBER;
                    } catch(err) {
                        actualErrorMessage = err.message;
                        actualErrorName = err.name;
                    }

                    expect(NEGATIVE_VAT_NUMBER_ERROR_MESSAGE).to.be.equal(actualErrorMessage);
                    expect(NEGATIVE_VAT_NUMBER_ERROR_NAME).to.be.equal(actualErrorName);
                });

                const INVALID_TYPE_VAT_ERROR = new Error('VAT must be a non-negative number');
                const INVALID_TYPE_VAT_ERROR_NAME = INVALID_TYPE_VAT_ERROR.name;
                const INVALID_TYPE_VAT_ERROR_MESSAGE = INVALID_TYPE_VAT_ERROR.message;

                it("should throw when setting 'VAT' with type of different than 'number'", function() {
                    let actualErrorName;
                    let actualErrorMessage;

                    try {
                        let test = new PaymentPackage(VALID_NAME, VALID_VALUE);
                        test.VAT = INVALID_PARAMETER_TYPE;
                    } catch(err) {
                        actualErrorMessage = err.message;
                        actualErrorName = err.name;
                    }

                    expect(INVALID_TYPE_VAT_ERROR_MESSAGE).to.be.equal(actualErrorMessage);
                    expect(INVALID_TYPE_VAT_ERROR_NAME).to.be.equal(actualErrorName);
                })
            });
        });

        describe("testing 'active'", function() {
            it("should set 'active' with correct value", function() {
                let test = new PaymentPackage(VALID_NAME, VALID_VALUE);
                test.active = VALID_ACTIVE_BOOLEAN_DIFFERENT_TAN_DEFAULT;
                let actualActive = test.active;

                expect(VALID_ACTIVE_BOOLEAN_DIFFERENT_TAN_DEFAULT).to.be.equal(actualActive);
            });

            const ACTIVE_SET_ERROR = new Error('Active status must be a boolean');
            const ACTIVE_SET_ERROR_NAME = ACTIVE_SET_ERROR.name;
            const ACTIVE_SET_ERROR_MESSAGE = ACTIVE_SET_ERROR.message;

            it("should throw when setting 'active' with type of different than 'boolean'", function() {
                let actualErrorName;
                let actualErrorMessage;

                try {
                    let test = new PaymentPackage(VALID_NAME, VALID_VALUE);
                    test.active = INVALID_PARAMETER_TYPE;
                } catch(err) {
                    actualErrorMessage = err.message;
                    actualErrorName = err.name;
                }

                expect(ACTIVE_SET_ERROR_MESSAGE).to.be.equal(actualErrorMessage);
                expect(ACTIVE_SET_ERROR_NAME).to.be.equal(actualErrorName);
            });
        });
    });

    describe("testing toString()", function() {
        let test = new PaymentPackage(VALID_NAME, VALID_VALUE);
        const EXPECTED_DEFAULT_RESULT = [
            `Package: ${VALID_NAME}`,
            `- Value (excl. VAT): ${VALID_VALUE}`,
            `- Value (VAT ${DEFAULT_VAT}%): ${VALID_VALUE * (1 + DEFAULT_VAT / 100)}`
          ].join("\n");

        it("should return correct string with unchanged 'active' and 'VAT'", function() {
            let actual = test.toString();

            expect(EXPECTED_DEFAULT_RESULT).to.be.equal(actual);
        });

        const EXPECTED_RESULT_ACTIVE_CHANGED = [
            `Package: ${VALID_NAME} (inactive)`,
            `- Value (excl. VAT): ${VALID_VALUE}`,
            `- Value (VAT ${DEFAULT_VAT}%): ${VALID_VALUE * (1 + DEFAULT_VAT / 100)}`
          ].join("\n");

        it("should return correct string when 'active' is changed", function() {
            let wtf = new PaymentPackage(VALID_NAME, VALID_VALUE);
            wtf.active = VALID_ACTIVE_BOOLEAN_DIFFERENT_TAN_DEFAULT;
            let actual = wtf.toString();

            expect(EXPECTED_RESULT_ACTIVE_CHANGED).to.be.equal(actual);
        });

        const EXPECTED_RESULT_VAT__CHANGED = [
            `Package: ${VALID_NAME}`,
            `- Value (excl. VAT): ${VALID_VALUE}`,
            `- Value (VAT ${VALID_VAT}%): ${VALID_VALUE * (1 + VALID_VAT / 100)}`
          ].join("\n");

        it("should return correct string when 'VAT' is changed", function() {
            test.active = true;
            test.VAT = VALID_VAT;
            let actual = test.toString();

            expect(EXPECTED_RESULT_VAT__CHANGED).to.be.equal(actual);
        });

        const EXPECTED_RESULT_VAT_ZERO = [
            `Package: ${VALID_NAME}`,
            `- Value (excl. VAT): 0`,
            `- Value (VAT 0%): 0`
          ].join("\n");


        it("should return correct string when 'VAT' is set to zero", function() {
            let zeroTest = new PaymentPackage(VALID_NAME, 0);
            zeroTest.VAT = 0;
            let actual = zeroTest.toString();

            expect(EXPECTED_RESULT_VAT_ZERO).to.be.equal(actual);
        });
    });
});



