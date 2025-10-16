// Mixins - Patrón para composición de funcionalidades
/*
	UN MIXIN ES UN OBJETO QUE CONTIENE MÉTODOS REUTILIZABLES
	Pensemos en los mixins como "superpoderes" que podemos añadir a cualquier clase
*/
const Volador = {
  // Método que simula la capacidad de volar
  volar() {
    // this.nombre hace referencia al objeto que use este mixin
    console.log(`${this.nombre} está volando`);
  }
}

const Nadador = {
  // Método que simula la capacidad de nadar
  nadar() {
    console.log(`${this.nombre} está nadando`);
  }
}

/*
	CLASE BASE PERSONA
	Esta es nuestra clase fundamental, sin capacidades especiales
*/
class Persona {
  constructor(nombre) {
    // Asigna el nombre a la instancia
    this.nombre = nombre;
  }
}

/*
	CLASE SUPERPERSONA - DONDE APLICAMOS LOS MIXINS
	Esta clase extiende Persona y añade capacidades especiales
*/
class SuperPersona extends Persona {
  constructor(nombre) {
    // super() LLAMA AL CONSTRUCTOR DE LA CLASE PADRE (Persona)
    // Esto asegura que this.nombre se inicialice correctamente
    super(nombre);
    
    /*
    	OBJECT.ASSIGN - LA CLAVE DE LOS MIXINS
    	Object.assign(target, ...sources) copia todas las propiedades 
    	de los objetos sources al objeto target
    	
    	En este caso:
    	- target: this (la instancia actual de SuperPersona)
    	- sources: Volador, Nadador (los mixins)
    	
    	Resultado: los métodos volar() y nadar() se copian a la instancia
    */
    Object.assign(this, Volador, Nadador);
    
    /*
    	DESPUÉS DE Object.assign, esta instancia tiene:
    	- this.nombre (de Persona)
    	- this.volar() (de Volador)
    	- this.nadar() (de Nadador)
    */
  }
}

/*
	CREACIÓN DE INSTANCIA Y USO
*/
// Creamos una nueva SuperPersona llamada "Tony Stark"
const superPersona = new SuperPersona("Tony Stark");

/*
	CUANDO SE EJECUTA new SuperPersona("Tony Stark"):
	1. Se llama al constructor de SuperPersona
	2. super(nombre) llama al constructor de Persona y establece this.nombre = "Tony Stark"
	3. Object.assign copia los métodos volar y nadar a la instancia
	4. Retorna la instancia completamente equipada
*/

// Ahora podemos usar los métodos de los mixins
superPersona.volar();  // Ejecuta: console.log("Tony Stark está volando")
superPersona.nadar();  // Ejecuta: console.log("Tony Stark está nadando")
// Recordar que JavaScript no permite herencia múltiple:
// class SuperPersona extends Persona, VoladorMixin, NadadorMixin { } // ERROR
// Por ello los mixins son tan útiles ya que simulan esa herencia múltiple
// permitiendo más flexibilidad, permitiendo mezclar comportamiento
