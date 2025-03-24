/* Utilizando objetos Boolean realiza un programa que indique si un array de 6 elementos 
solicitado al usuario se encuentra ordenado de la siguiente forma (e1 > e3, e2 < e4 y e5 = e6). */

let cont = new Array;

for (let i = 0; i < 6; i++) {
    cont[i]= parseInt(prompt("inserta un número"));
    i+1;
    cont[i].push;
}
console.log(cont);
cont = cont.valueOf();
console.log(cont);
let correcto1 = cont[0] > cont[2];
let correcto2 = cont[1] < cont[3];
let correcto3 = cont[4] == cont[5];
let acierto = new Boolean(correcto1 && correcto2 && correcto3);

if (acierto.valueOf()) {
    console.log("correcto");
} else {
    console.log("incorrecto");
}
