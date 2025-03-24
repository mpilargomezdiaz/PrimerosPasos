/* 
Crea un array de dos dimensiones (matriz) que contenga números y cadenas solicitados al usuario, 
muestra por pantalla los elementos cadena que se encuentren en posiciones fila par y columna impar

 1       Hola      3
 Adiós   3         2   -> Muestra Hola y Manzana
 4       Manzana   5
*/


let matriz_user = [];
let contador = 0;
let ln;

for (let i = 0; i < 3; i++) {
    let fila = [];
    for (let j = 0; j < 3; j++) {
        
        ln = prompt("inserte un número o una palabra");
        
        fila.push(ln);
        console.log(fila[j]);
    }
    matriz_user.push(fila);
}
console.log(matriz_user);
let mostrarmod = new Array;

for (let k = 0; k < matriz_user.length; k++) {
    if(k % 2 === 0) {
        for (let l = 0; l < matriz_user[k].length; l++) {
            if (l % 2 !== 0) {
                mostrarmod.push(matriz_user[k][l]);
            }
            
        }
    }
    
}
console.log(mostrarmod);