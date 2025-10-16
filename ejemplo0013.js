promesa
  .then(resultado => console.log(resultado))  // Se ejecuta si la promesa se resuelve
  .catch(error => console.error(error))       // Se ejecuta si la promesa es rechazada  
  .finally(() => console.log("Finalizado"));  // Se ejecuta siempre, sin importar el resultado
/*
	CADENA DE PROMESAS:
	.then() - Maneja el éxito, puede recibir el valor de resolve()
	.catch() - Maneja los errores, recibe el valor de reject()
	.finally() - Se ejecuta siempre, útil para limpieza
*/
