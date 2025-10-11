// La función puede declararse así
function cuadrados(n) {
    return n * n;
}

// Pero a partir de la modificación ES6 en 2015, se pueden usar
// funciones flecha:
const cuadrado = n => n * n;
// La cual puede leerse como:
// variable constante cuadrado = se toma parámetro n y esta definida como n*n

console.log(cuadrado(4));

/*
  Cabe aclarar que estas funciones flecha, no sustituyen totalmente a las funciones clásicas, 
  pero se usan mucho en programación moderna, especialmente en callbacks, promesas y componentes Angular.
*/

// si es necesario tener más parámetros de entrada
const sumar = (a, b) => a + b;

console.log(sumar(3, 4));
