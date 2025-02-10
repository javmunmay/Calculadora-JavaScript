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
  if (b === 0) return Infinity;
  return a / b;
}

function raiz(a) {
  return Math.sqrt(a);
}

// Exportar funciones para Node.js (Jest)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { suma, resta, multiplica, divide, raiz };
}

// Hacer las funciones accesibles en el navegador
if (typeof window !== "undefined") {
  window.suma = suma;
  window.resta = resta;
  window.multiplica = multiplica;
  window.divide = divide;
  window.raiz = raiz;
}
