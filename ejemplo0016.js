async function obtenerDatosUsuarios() {
  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3"
  ];
  
  // Promise.all ejecuta múltiples promesas en "paralelo"
  const respuestas = await Promise.all(urls.map(url=>fetch(url)));
  // Convertimos todas las respuestas a JSON en paralelo
  const usuarios = await Promise.all(respuestas.map(res=>res.json()));

  console.log(usuarios);
  console.log(usuarios[0].address.geo)
}

console.log("Esperando datos:")
obtenerDatosUsuarios();
/*
	PROMISE.ALL - OPTIMIZACIÓN DE MÚLTIPLES PETICIONES:
	- Ejecuta varias promesas simultáneamente
	- Más eficiente que usar await secuencialmente
	- Si una promesa falla, todas fallan
	- Retorna un array con todos los resultados en el mismo orden
*/
