async function cargarDatos() {
    try {
        // await pausa la ejecución hasta que fetch complete la petición
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        // await pausa hasta que la conversión a JSON termine
        const datos = await resp.json();
        console.log("Usuarios:", datos.slice(0, 3));
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}
cargarDatos();
/*
	MANEJO DE ERRORES CON ASYNC/AWAIT:
	- try/catch funciona de manera natural con async/await
	- Cualquier error en las operaciones await será capturado por el catch
	- Mucho más intuitivo que .catch() en cadenas de promesas
*/
