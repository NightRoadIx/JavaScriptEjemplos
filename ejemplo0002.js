/*
  Las variables en JavaScript pueden ser de 3 tipos:
  var    - Funciona en el ámbito de la función, puede tener "hoisting" (elevación)
  const  - Esta es una constante, no se puede reasignar. Ámbito dentro de bloque
  let    - Funciona en el ámbito de bloque
*/
let x = 10;
let y = 5;
// Proporciona directo en consola el resultado
console.log("Suma: ", x + y);

// JavaScript "lee" todo el código antes de ejecutarlo, por lo que es posible lo siguiente
console.log(nombre); // El resultado es "undefined"
var nombre = "Ana";
// Esto, SOLO sucede con var, let y const no permiten esto
// A esto se le llama "zona muerta temporal", el periodo entre la creación y asiganción de la variable

// Aunque const no se puede reasignar
const valor = 5;
// Esto daría error:  valor = 3;
// Const si se puede reasignar usando métodos de objeto
const numeros = [1, 2, 3];
numeros.push(4);
// Esto indica que const no impide que el valor cambie internamente, solo impide reasignar la referencia
