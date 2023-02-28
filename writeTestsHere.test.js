const getSum = require('./1.js');
const arithmetic = require('./2.js');
const checkNumber = require('./3.js')

describe('Sum of arrays elements', () => {
    const arr = [5, 2, 11]
    const arr2 = [0.1, 0.2]
    test('should return sum of arrays elements', () => {
        expect(getSum(arr)).toBe(18);
        expect(getSum(arr)).not.toBe(17);
        expect(getSum(arr)).toEqual(18);
    })

    test('should return sum of arrays elements which are floating-point arithmetic', () => {
        expect(getSum(arr2)).toBeCloseTo(0.3);
    })

    test('should return value comparing with other values', () => {
        expect(getSum(arr)).toBeGreaterThan(17);
        expect(getSum(arr)).toBeLessThanOrEqual(18);
    })

    test('check if a result is not falsy', () => {
        expect(getSum(arr2)).toBeTruthy();
        expect(getSum(arr)).not.toBeFalsy();
    })

    test('check if a result defined', () => {
        expect(getSum(arr)).toBeDefined();
    })
})

describe('Result of arithmetic operations', () => {
    const a = 10
    const b = 5

    test('should return result of operation', () => {
        expect(arithmetic(a, b, 'add')).toBe(15)
        expect(arithmetic(a, b, 'subtract')).toBe(5)
        expect(arithmetic(a, b, 'multiply')).toBe(50)
        expect(arithmetic(a, b, 'divide')).toEqual(2)
        expect(arithmetic(a, b, 'multiply')).not.toBeNaN()
        expect(arithmetic(a, 0, 'divide')).toBe(Infinity)
    })

    test('should return value comparing with other values', () => {
        expect(arithmetic(a, b, 'add')).toBeGreaterThan(14);
        expect(arithmetic(a, b, 'multiply')).toBeGreaterThanOrEqual(45);
        expect(arithmetic(a, b, 'divide')).toBeLessThan(5);
        expect(arithmetic(a, b, 'subtract')).toBeLessThanOrEqual(10);
    })

    test('check if a result of operation is true or false', () => {
        expect(arithmetic(a, b, 'add')).toBeTruthy()
        expect(arithmetic(a, b, 'multiply')).not.toBeFalsy();
        expect(arithmetic(null, null, 'divide')).toBeFalsy();
    })

    test('Check if a result is NaN', () => {
        const a = NaN
        const b = NaN
        expect(arithmetic(a, b, 'add')).toBeNaN()
        expect(arithmetic(a, b, 'divide')).toBeNaN()
    })

    test('Check if a result is defined', () => {
        expect(arithmetic(a, b, 'add')).toBeDefined()
        expect(arithmetic(a, b, 'multiply')).toBeDefined()
    })
})

describe('Even number of result', () => {
    test('check if a result even on not (true or false)', () => {
        expect(checkNumber(8)).toBe(true)
        expect(checkNumber(7)).toBe(false)
        expect(checkNumber(56)).toEqual(true)
        expect(checkNumber(13)).toBeFalsy()
        expect(checkNumber(20)).toBeTruthy()
        expect(checkNumber(null)).toBeTruthy() // как это нечисло делится на 2 без остатка, не понимаю
        expect(checkNumber(NaN)).toBeFalsy()
        expect(checkNumber(undefined)).toBeFalsy()
    })

    test('check if a result in not null', () => {
        expect(checkNumber(null)).not.toBeNull()
    })

    test('check if a result is not NaN', () => {
        expect(checkNumber(NaN)).not.toBeNaN()
    })

    test('check if a result is defined', () => {
        expect(checkNumber(2)).toBeDefined()
        expect(checkNumber(9)).not.toBeUndefined()
    })
})