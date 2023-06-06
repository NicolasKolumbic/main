console.log("%cArreglos", "color:blue;")
// a. Mostrar por consola los months 5 y 11
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Mes 5:", months[4]);
console.log("Mes 11:", months[10]);

// b. Ordenar el array de months alfabéticamente y mostrarlo por consola
var sortedMonths  = months.sort();
console.log("months ordenados:", sortedMonths);

// c. Agregar un elemento al principio y al final del array
months.unshift("Principio de año...");
months.push("Fin de Año!");
console.log("Array con elementos agregados:", months);

// d. Quitar un elemento del principio y del final del array
months.shift();
months.pop();
console.log("Array con elementos removidos:", months);

// e. Invertir el orden del array
months.reverse();
console.log("Array invertido:", months);

// f. Unir todos los elementos del array en un único string separado por un guión (-)
var joinedMonths  = months.join("-");
console.log("months unidos:", joinedMonths );

// g. Crear una copia del array de months que contenga desde Mayo hasta Noviembre
var monthsCopy = months.slice(4, 11);
console.log("Copia de months:", monthsCopy);
