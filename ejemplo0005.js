// Es posible crear una función con parámetros por defecto
function saludar(nombre = "Invitado") {
    console.log(`Hola, ${nombre}`);
}

saludar();           // Hola, Invitado
saludar("Carlos");   // Hola, Carlos

// Con el cambio ES6, esto paso a ser
function saludar(nombre) {
    nombre = nombre || "Invitado";
    console.log("Hola " + nombre);
}

// En función flecha
const multiplicar = (a, b = 2) => a * b;
console.log(multiplicar(5));   // 10
console.log(multiplicar(5, 4)); // 20
