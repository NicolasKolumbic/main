console.log("%cVARIABLES Y OPERADORES", "color:blue;")
/* 
* Crear dos variables numéricas y utilizar el operador suma para guardar el valorde la suma de ambos números en 
* una 3er variable.
*/
var value1 = 5;
var value2 = 8;
var total = value1 + value2;
console.log("El resultado de la suma es:", total);

/**
 * Crear dos variables de tipo String y concatenarlas guardando el resultado en una3er variable.
 */
var text1 = "Hola";
var text2 = "Mundo";
var longText = text1 + text2;
console.log("El resultado de la concatenación es:", longText);

/**
 * Crear dos variables de tipo String y sumar el largo de cada variable
 * (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length)
 */
var text3 = "Hello";
var text4 = "World";
var lengthText = text3.length + text4.length;
console.log("El resultado de la suma de largos es:", lengthText);
