
console.log("%cFUNCIONES", "color:blue;")
/*
    a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador.
*/
function suma(a, b) {
    return a + b;
  }
  
  var resultado = suma(5, 3);
  console.log(resultado);
  
/**
 * b. A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado.
 */
  function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      alert("Error: uno o más números no son enteros.");
      return NaN;
    }
    return a + b;
  }
  
/*
c. Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.
 */
 function validateInteger(number) {
    return Number.isInteger(number);
  }
  
  /* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado).
*/
  function suma(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
      alert("Error: uno o ambos números no son enteros.");
      return Math.round(a) + Math.round(b);
    }
    return a + b;
  }
  
  /* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.*/
  function validateInteger(number) {
    return Number.isInteger(number);
  }
  
  function suma(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
      alert("Error: uno o ambos números no son enteros.");
      return Math.round(a) + Math.round(b);
    }
    return a + b;
  }
  