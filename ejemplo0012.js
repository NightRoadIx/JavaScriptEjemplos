/*
	Una Promesa es un objeto que representa el resultado futuro de una operación asíncrona.
	Tiene tres estados:
	pending		-	en progreso
	fulfilled	-	se resolvió correctamente
	rejected	-	ocurrió un error
*/
//Se genera un objeto tipo Promesa
const promesa = new Promise((resolve, reject) => {
	// Aquí se crea una variable para saber si sucedió
    let exito = true;
    if (exito)
	{
        resolve("Operación exitosa");
    } else 
	{
        reject("Error en la operación");
    }
});
/*
	ANATOMÍA DE UNA PROMESA:
	- resolve(): marca la promesa como cumplida y pasa el resultado
	- reject(): marca la promesa como rechazada y pasa el error
	- La promesa puede representar cualquier operación asíncrona
*/
