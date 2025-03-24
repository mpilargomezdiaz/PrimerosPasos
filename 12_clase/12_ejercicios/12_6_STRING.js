// Solicita una cadena al usuario y devuélvela invertida Ej: "Hola, ¿qué tal estás?" -> estás? tal ¿qué Hola,

let cadena = prompt("escribe una frase");
let frase = new String(cadena);
let cadenaseparada = frase.valueOf().split(" ");
console.log(cadenaseparada);
let cadena_nueva = new Array;

for (let i = cadenaseparada.length-1; i >=0 ; i--) {
    cadena_nueva.push(cadenaseparada[i]);
}
alert(cadena_nueva);