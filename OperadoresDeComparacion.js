console.log(4 < 7);
console.log(4 < 1);
console.log(4 > 4);
console.log(4 == 7);

//== igualdad: verifica si el valor es el mismo
3 == 3;

//=== Igualdad estricta: verifica que coincida tanto el tipo de dato como el valor del mismo
3 === 3;


// es verdadero porque JavaScript ejecuta un Algoritmo llamado Abstract Equality Comparison
//que permite comparar valores aunque estos sean de distintos tipos de datos
3 == '3';


// es falso porque el tipo de dato del de la izquierda es number y el tipo de dato del de la derecha es String
3 === '3';

//Asociatividad: la asignación tiene precedencia desde derecha hacia izquierda
var a = 1;
var b = 2;
var c = (a = b);

console.log(a);
console.log(b);

//la división tiene una asociatividad hacia la izquierda
//el resultado es 2
console.log(16 / 2 / 4); 