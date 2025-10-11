// Las funciones en JS se declaran de la siguiente forma:
function factorial(n) {
    // Los valores 0! = 1, 1! = 1, estan definidos
    if(n <= 1) return 1;
    // En otro caso se regresa el valor del factorial de n-1
    // Dado que el factorial está definido como n! = n*(n-1)*(n-2)*...*(1)*(0!)
    return n * factorial(n-1);
}
/*
  Este es un ejemplo de programación funcional, ya que para crear 
  los valores se usa la recursión para hacer que la función se mande
  llamar a sí misma.

  Para ello se tiene que tener una condición de paro tal como en los bucles
  con for o while
*/

// Llamada a la función directamente en consola
console.log("Factorial de 5: ", factorial(5));
