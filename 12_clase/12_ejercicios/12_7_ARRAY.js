let matriz_user = [];

for (let i = 0; i < 3; i++) {
    let fila = [];
    for (let j = 0; j < 3; j++) {
        let ln = prompt("Inserte un número o una palabra");
        if (!isNaN(ln)) {
            ln = Number(ln);
        }

        fila.push(ln);
    }
    matriz_user.push(fila);
}

console.log("Matriz ingresada:", matriz_user);

let mostrarmod = new Array();

for (let k = 0; k < matriz_user.length; k++) {
    if (k % 2 === 0) {
        for (let l = 0; l < matriz_user[k].length; l++) {
            if (l % 2 !== 0 && isNaN(matriz_user[k][l])) {
                mostrarmod.push(matriz_user[k][l]);
            }
        }
    }
}

console.log("Elementos mostrados:", mostrarmod);
alert("Cadenas en fila par y columna impar: " + mostrarmod.join(", "));
