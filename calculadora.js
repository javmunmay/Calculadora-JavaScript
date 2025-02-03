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

  module.exports = { suma, resta, multiplica, divide, raiz};