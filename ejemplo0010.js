/*
  JS es ejecución de un solo hilo
  Sin embargo pueden "pausarse" tareas lentas y seguir ejecutando el código restante
  y una vez que la tarea termina, el resultado vuelve a la cola de ejecución
*/
console.log("Inicio");  // Se ejecuta primero
// Esto se queda esperando un total de 2000 ms para poder ejecutarse
setTimeout(() => console.log("Tarea completada"), 2000);
// Se ejecuta esto antes de la línea anterior
console.log("Fin");


/*
  Promesas
  Una Promise es un objeto que representa el resultado futuro de una operación asíncrona.
*/
// Promise es una clase que ejcuta resolve, tras haber esperado un tiempo propuesto por setTimeout()
const promesa = new Promise((resolve) => {
    // simular una tarea que tarda 2000 ms en completarse
    setTimeout(() => resolve("Datos cargados"), 2000);
});
// Una vez declarada, se ejecuta (o consume) con el método then()
// que contiene que es lo que realizará
promesa.then(msg => console.log(msg));
console.log("Hola de nuevo");
