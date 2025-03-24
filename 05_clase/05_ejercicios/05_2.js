//Una función que devuelva el número de cifras de un entero solicitado al usuario.

function contadorEntero() {
    let numero = prompt("Inserta un número entero");
    alert(numero.length);
}

/*
Una función que muestre al usuario una secuencia de _ (se debe construir la cadena de uno en uno), la cantidad de _ será 
solicitada al usuario.
*/

function secuencia() {
    let veces = prompt("inserte un número");
    parseInt(veces);
    let raya = "_ ";
    let secuencia = " ";
    for (let i = 0; i < veces; i++) {
        secuencia += raya;
    }
    alert (secuencia);
}

/* Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno):
*+_*+_*+_*+_
*/

function secuenciaSimbolos() {
    let secuencia = " ";
    let numero = prompt("inserte un número");
    parseInt(numero);
    for (let i = 0; i < numero; i++) {
        switch (i%3) {
            case 0:
                secuencia = secuencia + "*";
                break;
            case 1:
                secuencia = secuencia + "+";
                break;
            case 2:
                secuencia = secuencia + "_";
        } 
    }
    alert (secuencia);
}

/*
Una función que permita mostrar un triángulo como el siguiente:
 *
 **
 ***
 ****
 *****
*/

function triangulo() {
    let secuencia = " ";
    let asterisco = "*";
    let numero = prompt("inserte un número");
    parseInt(numero);
    for (let i = 0; i < numero; i++) {
        for (let j = 0; j <= i; j++) {
            secuencia = secuencia + asterisco;
        }
        secuencia = secuencia + '\n';
    }
    alert(secuencia);
}
