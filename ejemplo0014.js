
/*
	Uso con async/await 
	Una forma más limpia y legible de manejar promesas.
	Permite escribir código asíncrono con apariencia "sincrónica".
	
	Reglas básicas:
		* async se coloca antes de una función → esta función devuelve una 
		  promesa automáticamente.
		* await pausa la ejecución hasta que una promesa se resuelve 
		  (solo puede usarse dentro de una función async).
*/
const esperar = ms => new Promise(resolve => setTimeout(resolve, ms));
async function ejecutar() {
    console.log("Inicio");
    await esperar(2000); // Pausa 2 segundos sin bloquear el hilo principal
    console.log("Fin");
}
ejecutar();
// await no bloquea todo el programa, solo pausa dentro de la función 
// mientras el resto del código global puede seguir ejecutándose.
/*
	VENTAJAS DE ASYNC/AWAIT:
	- Código más legible y similar al código síncrono
	- Manejo de errores más simple con try/catch
	- Mejor debugging
*/
