/*
	FUNCIONES DE ORDEN SUPERIOR Y CURRYING:
	- Función de orden superior: función que recibe o retorna otra función
	- Currying: técnica de transformar una función múltiples argumentos 
	  en una secuencia de funciones de un argumento
	- mayorQue(10) retorna una función que espera el valor a comparar
	- Permite crear funciones especializadas a partir de funciones generales
*/
const mayorQue = (num) => (valor) => valor > num;

const esMayorQue10 = mayorQue(10);
const esMayorQue20 = mayorQue(20);

console.log(esMayorQue10(15));  // true
console.log(esMayorQue20(15));  // false
