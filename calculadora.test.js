const { suma, resta, multiplica, divide, raiz, validatePassword } = require('./calculadora');


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
    expect(divide(15, 3)).toBe(5);
});

test('raiz de 9 y devuelve 3', () => {
    expect(raiz(9)).toBe(3);
});


