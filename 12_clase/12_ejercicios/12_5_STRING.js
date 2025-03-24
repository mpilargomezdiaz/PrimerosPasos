// Solicita una cadena al usuario e indica la cantidad de veces que aparece la a en las palabras impares.

let cadena = prompt("escribe una frase");
let frase = new String(cadena);
let cadenaseparada = frase.valueOf().split(" ");
const letra = "a";
let palabra;
console.log(cadenaseparada);
let contador = 0;
for (let i = 0; i < cadenaseparada.length; i++) {
    if (i % 2 === 0) {
    palabra = cadenaseparada[i];
    for (let j = 0; j < palabra.length; j++) {
        console.log(palabra.charAt(j));
        if ((palabra.charAt(j)).includes(letra)) {
            console.log(palabra.charAt(j) + " correcto");
            contador++;
            } else {
        console.log(palabra.charAt(j) + " incorrecto");
        }
    }
    palabra.push;
    contador.push;
}  
}
console.log(contador);
alert("Número de veces que aparece la letra 'a' en las palabras impares en la cadena introducida por el usuario = " + contador);
