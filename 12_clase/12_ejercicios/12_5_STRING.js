let cadena = prompt("Escribe una frase");
let frase = new String(cadena);
let cadenaseparada = frase.valueOf().split(" ");
const letra = "a";
let palabra;
console.log(cadenaseparada);
let contador = 0;

for (let i = 0; i < cadenaseparada.length; i++) {
    if (i % 2 === 0) {
        palabra = new String(cadenaseparada[i]);
        for (let j = 0; j < palabra.length; j++) {
            console.log(palabra.charAt(j));
            if (palabra.charAt(j) === letra) {
                console.log(palabra.charAt(j) + " correcto");
                contador++;
            } else {
                console.log(palabra.charAt(j) + " incorrecto");
            }
        }
    }  
}

console.log("Total de 'a' encontradas:", contador);
alert("Número de veces que aparece la letra 'a' en las palabras impares en la cadena introducida por el usuario = " + contador);
