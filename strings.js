console.log("%cCADENAS DE TEXTOS", "color:blue;")
// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var text5 = "example of text";
var uppercaseText = text5.toUpperCase();
console.log("Texto en mayúscula", uppercaseText);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los primeros 5 caracteres guardando el resultado en una nuevavariable (utilizar substring).
var text6 = "Lenguajes de Programación para la Administración";
var first5Characters = text6.substring(0, 5);
console.log("Los primeros 5 caracteres:", first5Characters);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring).
var text7 = "Lenguajes de Programación para la Administración";
var last3Characters = text7.substring(text7.length - 3);
console.log("Los últimos 3 caracteres:", last3Characters);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con la primera varra en mayúscula y las demás en minúscula. Guardar elresultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var text8 = "Ingeniería en Sistemas de Información";
var firstvarterUppercase = text8.substring(0, 1).toUpperCase();
var restInLowercase = text8.substring(1).toLowerCase();
var newText = firstvarterUppercase + restInLowercase;
console.log("Nuevo texto:", newText);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco. Encontrar la posición del primer espacio en blanco y guardarla en unavariable (utilizar indexOf).
var text9 = "Ingeniería en Sistemas de Información";
var whitespacePosition = text9.indexOf(" ");
console.log("Position of the whitespace:", whitespacePosition);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres yalgún espacio entre medio). Utilizar los métodos de los ejercicios anteriores paragenerar un nuevo string que tenga la primera varra de ambas palabras enmayúscula y las demás varras en minúscula (utilizar indexOf, substring,toUpperCase, toLowerCase y el operador +).
var text10 = "ejemplo de una CADENA larga";
var firstWhitespace = text10.indexOf(" ");
var word1 = text10.substring(0, firstWhitespace);
var word2 = text10.substring(firstWhitespace + 1);
var newWord1 = word1.substring(0, 1).toUpperCase() + word1.substring(1).toLowerCase();
var newWord2 = word2.substring(0, 1).toUpperCase() + word2.substring(1).toLowerCase();
var newtext6 = newWord1 + " " + newWord2;
console.log("New text with first varter in uppercase:", newtext6);
