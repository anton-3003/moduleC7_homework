import { revString } from "../reverseString.js";

describe("Проверка реверса строки", () => {
    const str1 = 'Hello';
    const str2 = 'Антон';
    const str3 = 'Hello, World!';

    it('Строка Hello', () => {
       expect(revString(str1)).toBe('olleH');
    }),
    it('строка Антон', () => {
       expect(revString('Антон')).toBe('нотнА');
    }),
    it('строка Hello, World!', () => {
       expect(revString('Hello, World!')).toBe('!dlroW ,olleH');
    });
});