/*
	PROGRAMACIÓN ORIENTADA A OBJETOS EN JAVASCRIPT:
	- Herencia: extends permite crear clases hijas
	- super(): llama al constructor de la clase padre
	- Polimorfismo: sobrescritura de métodos para comportamiento específico
	- Encapsulación: propiedades y métodos organizados en clases
*/
// Clase base: Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// Clase hija: Estudiante
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
      	// Esto es el constructor de la clase Padre (Persona)
        super(nombre, edad);  // Llama al constructor de la clase padre
        this.carrera = carrera;
    }
    // Sobrescritura de método
    presentarse() {
        return `${super.presentarse()} y estudio ${this.carrera}.`;
    }
}

class Empleado extends Persona
{
  constructor(nombre, edad, puesto, salario, horario, nss)
  {
    super(nombre, edad);
    this.puesto = puesto;
    this.salario = salario;
    this.horario = horario;
    this.nss = nss;
  }
  
  // Sobreescribir presentarse
  	presentarse() {
        return `${super.presentarse()} y soy ${this.puesto}.`;
    }
  
}

const persona = new Persona("Donovan", 20);
const estudiante = new Estudiante("Carlos", 21, "Ingeniería");
const empleado = new Empleado("Donovan", 20, "Administrativo");

console.log(persona.presentarse());
console.log(estudiante.presentarse()); // "Hola, soy Carlos y tengo 21 años. Estudio Ingeniería."
console.log(empleado.presentarse());
