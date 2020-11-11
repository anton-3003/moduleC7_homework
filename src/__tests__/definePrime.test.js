import { definePrime } from "../definePrime.js";

xdescribe('Test definePrime function', () => {
    const simple = 17;
    const complex = 18;
    it('Корректная работа с простым числом', () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`)
    }),
    it('Корректная работа с составным числом', () => {
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`)
    }),
    it('Корректная работа с некоррекнтым числом', () => {
        expect(definePrime(1008)).toBe('Данные неверны')
    })

});