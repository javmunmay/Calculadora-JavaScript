
const {validatePassword } = require('./verificarpassword');


test('Validacion de contraseña', () => {
    expect(validatePassword("9Mh@9Mh?"));
});