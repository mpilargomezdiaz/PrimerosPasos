function contadorEntero() {
    let numero = prompt("Inserta un número entero");
    alert(numero.replace("-", "").length);
}


function secuencia() {
    let veces = prompt("Inserte un número");
    veces = parseInt(veces);
    let raya = "_ ";
    let secuencia = " ";
    for (let i = 0; i < veces; i++) {
        secuencia += raya;
    }
    alert(secuencia);
}


function secuenciaSimbolos() {
    let secuencia = " ";
    let numero = prompt("Inserte un número");
    numero = parseInt(numero);
    for (let i = 0; i < numero; i++) {
        switch (i % 3) {
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
    alert(secuencia);
}


function triangulo() {
    let secuencia = "";
    let asterisco = "*";
    let numero = prompt("Inserte un número");
    numero = parseInt(numero);

    for (let i = 0; i < numero; i++) {
        for (let j = 0; j <= i; j++) {
            secuencia = secuencia + asterisco;
        }
        secuencia = secuencia + '\n';
    }

    console.log(secuencia);
}
