
const {validateTarget } = require('./DeepStrike');


test('validateTarget - dentro de China', () => {
    expect(validateTarget(30.0, 120.0)).toBe(true);
});

test('validateTarget - latitud fuera de rango', () => {
    expect(validateTarget(60.0, 120.0)).toBe(false);
});

test('validateTarget - longitud fuera de rango', () => {
    expect(validateTarget(30.0, 140.0)).toBe(false);
});

test('validateTarget - entrada no numérica', () => {
    expect(validateTarget("30.0", 120.0)).toBe(false);
});