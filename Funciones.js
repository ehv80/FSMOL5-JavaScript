//declaración de la función que muestra el resultado en la consola
function sumaTres(x) {
    console.log(x + 3);
}

//uso de la función
sumaTres(5);

//otra manera de declarar la función que retorna el resultado
function sumaTres(x) {
    return x + 3;
}

//otra manera de declarar la función
var sumaTres = function (x) {
    return x + 3;
}

//otra manera de declarar la función, con la sintaxis función de flecha
var sumaTres = (x) => {
    return x + 3;
}
