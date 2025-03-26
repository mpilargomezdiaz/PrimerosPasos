let cont = [];
for (let i = 0; i < 6; i++) {
    cont[i] = parseInt(prompt(`Inserta el número ${i + 1}:`), 10);
}

console.log("Array ingresado:", cont);

let correcto1 = new Boolean(cont[0] > cont[2]);
let correcto2 = new Boolean(cont[1] < cont[3]);
let correcto3 = new Boolean(cont[4] == cont[5]);

let acierto = new Boolean(correcto1.valueOf() && correcto2.valueOf() && correcto3.valueOf());

if (acierto.valueOf()) {
    console.log("correcto");
} else {
    console.log("incorrecto");
}
