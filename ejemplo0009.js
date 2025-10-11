/*
  Encapsulación
  Dentro de la POO, el otro pilar es la encapsulación, que es
  dejar a los atributos de una clase ocultos fuera de la misma
  clase, para evitar que los valores sean modificados de manera "ilegal"
*/

class Cuenta {
    // Esto es un atributo privado
    #saldo = 0;
    constructor(titular) {
        this.titular = titular;
    }

    depositar(monto) {
        // El atributo privado puede ser manejado de forma interna en la clase
        this.#saldo += monto;
    }

    mostrarSaldo() {
        return `Saldo actual: $${this.#saldo}`;
    }
}

const cuenta = new Cuenta("Juan");
// Intentar asignar cuenta.saldo = 5000; provocaría un error, ya que el atributo es privado
cuenta.depositar(500);
console.log(cuenta);    // Esto muestra información del objeto, pero no muestra atributos ocultos
console.log(cuenta.mostrarSaldo());
