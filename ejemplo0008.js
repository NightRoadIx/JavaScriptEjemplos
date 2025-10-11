/*
  Programación Orientada a Objetos en JS (POO)
  Anteriormente, JS no podía manejar POO, sin embargo, con la actualización
  ES6, ya es posible
*/
// Nombre de la clase
let Persona = {
    // ATRIBUTOS (variables, como describo al objeto)
    nombre: "Donovan",
    edad: 20,
    // METODOS (funciones, que puede hacer el objeto)
    presentar: function() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
};
console.log(Persona.presentar());
