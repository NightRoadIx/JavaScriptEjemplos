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


// La otra forma de declarar un objeto es mediante class
// Esto es crear una especie de plantilla que contiene variables y funciones
class Empleado {
    // Constructor de la clase usando parametros
    // El constructor es aquella función que se manda a llamar
    // cuando se crea un objeto (la implementación de la clase)
    constructor(nombre, puesto, salario) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.salario = salario;
    }
    // Método mostrarInfo
    mostrarInfo() {
        // Usando comillas `` se puede asignar vaiables a imprimir mediante {}
        // this, permite ingresar a los atributos de la clase sin tener que
        // instanciar un objeto y son los atributos DE LA MISMA CLASE (esta o this)
        return `${this.nombre} - ${this.puesto} ($${this.salario})`;
    }
}

// Instanciar un objeto (crear una variable del tipo clase)
const juan = new Empleado("Juan", "Desarrollador Web", 1500);
console.log(juan.mostrarInfo());
