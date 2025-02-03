const { suma, resta, multiplica, divide, raiz } = require('./calculadora');


test('Suma 2 + 3 y devuelve 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(resta(5, 3)).toBe(2);
});

test('Multiplicar 5 * 3 y devuelve 15', () => {
    expect(multiplica(5, 3)).toBe(15);
});

test('Dividir 15 / 3 y devuelve 5', () => {
    expect(divide(5, 3)).toBe(5);
});

test('raiz de 3 y devuelve 9', () => {
    expect(raiz(3)).toBe(9);
});
