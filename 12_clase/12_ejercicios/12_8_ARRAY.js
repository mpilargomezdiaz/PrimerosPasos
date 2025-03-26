let num;
let contador = 0;
let array_user = new Array();

do {
    num = prompt("Introduce un número (máx. 10 valores):");
    num = parseFloat(num);

    if (!isNaN(num)) {
        array_user.push(num);
        contador++;
    } else {
        alert("Por favor, introduce un número válido.");
    }
} while (contador < 10);

console.log("Array ingresado:", array_user);

let suma = 0;

for (let i = 0; i < array_user.length; i++) {
    suma += array_user[i];
}

console.log("Suma total:", suma);

let media = suma / array_user.length;
console.log("La media es: " + media);
alert("La media de los números ingresados es: " + media);
