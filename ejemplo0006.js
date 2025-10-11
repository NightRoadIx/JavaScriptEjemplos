// Arreglos se declaran de la siguiente forma:
let nums = [2, 4, 6, 8];
// Y pueden recorrerse usando su método forEach, el cual
// es una especie de for que recorrera completo la colección
// de datos
// forEach(variable temporal => acción a realizar)
nums.forEach(n => console.log(n * 2));

// También es posible usar map()
const dobles = numeros.map(n => n * 2);
// El cual "mapea" los valores (transforma) de acuerdo al modelo
// map no modifica el arreglo original, ya que crea uno nuevo
// esto es otro concepto de la programación funcional, la inmutabilidad
console.log(dobles)

// Por otro lado, existe el método filter(), el cual filtra elementos
// que cumplan una condición
const edades = [12, 18, 25, 30, 40];
const adultos = edades.filter(e => e >= 18);  // filtro mayor a 18
console.log(adultos); // [18, 25, 30, 40]


// Operador ternario
// variable = prueba lógica? valor verdadero : valor falso;
const resultado = 2 > 3? 3 : 5;
