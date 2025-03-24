// Solicita al usuario un array de máximo 10 números reales y calcula su media.

let num;
let contador = 0;
let array_user = new Array;

do {
    num = prompt("dato");
    parseFloat(num);
    console.log(num);
    array_user.push(num);
    contador++;
} while (contador<10);

console.log(array_user);
parseFloat(array_user);

let suma = 0;

    for (let i = 0; i < array_user.length; i++) {
        suma += parseFloat(array_user[i]);
    }
    console.log(suma);

let media = suma / array_user.length;

console.log("la media es: " + media)
