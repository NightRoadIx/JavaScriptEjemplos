/*
	JavaScript es un lenguaje de un solo hilo (single-threaded)
	Ya que sólo se puede ejecutar una cosa a la vez.
	Pero usa un bucle de eventos (event loop) para "pausar" tareas lentas 
	(como acceder a una API o leer un archivo) y seguir ejecutando el resto del código.
	Una vez que la tarea termina, su resultado vuelve a la cola de ejecución.
*/
console.log("Inicio");
// Dejar un tiempo de 2000 ms
setTimeout(() => console.log("Tarea completada"), 2000);
console.log("Fin");
/*
	DEMOSTRACIÓN DEL EVENT LOOP:
	- Primero se ejecuta "Inicio"
	- setTimeout se programa para ejecutarse después de 2000ms, pero NO bloquea
	- "Fin" se ejecuta inmediatamente después
	- Después de 2 segundos, aparece "Tarea completada"
	Esto muestra la naturaleza asíncrona de JavaScript.
*/
