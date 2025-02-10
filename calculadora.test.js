const { suma, resta, multiplicar, dividir } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(resta(5, 3)).toBe(2);
});

test('Multiplica 5 * 3 y devuelve 15', () => {
    expect(multiplicar(5, 3)).toBe(15);
});

test('Divide 10 / 2 y devuelve 5', () => {
    expect(dividir(10, 2)).toBe(5);
});

/*test('Raíz cuadrada de 121 y devuelve 11', () => {
    expect(raizCuadrada(121)).toBe(11);
});*/