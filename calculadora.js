// calculadora.js

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function raiz(a) {
  return Math.sqrt(a);
}




// passwordValidator.js
function validatePassword(password) {
  const minLength = '/.{8,}/';
  const hasUpperCase = '/[A-Z]/';
  const hasLowerCase = '/[a-z]/';
  const hasNumber = '/[0-9]/';
  const hasSpecialChar = '/[!@#$%^&*()_+{}|:<>?]/';

  return (
    minLength.test(password) &&
    hasUpperCase.test(password) &&
    hasLowerCase.test(password) &&
    hasNumber.test(password) &&
    hasSpecialChar.test(password)
  );
}

module.exports = { suma, resta, multiplica, divide, raiz, validatePassword};