//const sum = require('./index');

// test('сложение 1 + 2 равно 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

const multiply = require('../index');

// test('Умножение 1 * 0 = 1', () => {
//     expect(multiply(1, 0)).toBe(0);
// });


xdescribe("Тесты умножения", () => {
    it("Умножение 1 на 0 = 0", () => {
       const result = multiply(1, 0);
       expect(result).toBe(0);
    }),
    xit("Умножение 2 на 2 = 4", () => {
        const result = multiply(2, 2);
        expect(result).toBe(4);
    });
});