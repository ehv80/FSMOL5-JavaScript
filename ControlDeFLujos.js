// Declaración de la función
function viajar(destino) {
    if (destino === "Brasil") {
        console.log("Gire a la IZQUIERDA");
    } else if (destino === "Argentina") {
        console.log("Gire a la DERECHA");
    } else {
        console.log("Nos Perdimos");
    }
}

// ejecución de la función viajar con el destino Brasil
viajar('Brasil');

// ejecución de la función viajar con el destino Argentina
viajar('Argentina');

// ejecución de la función viajar con el destino Rosario
viajar('Rosario');

//declaración de la función puedeManejar
function puedeManejar(edad) {
    if (edad >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
}

//ejecución de la función puedeManejar
puedeManejar(5);
puedeManejar(18);
