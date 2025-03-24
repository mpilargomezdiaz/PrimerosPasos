//Solicita al usuario tres números enteros e indícale cuál es el menor.


//FUNCIÓN TRADICIONAL

function ej041() {
    let n1 = prompt("Inserta un número");
    let n2 = prompt("Inserta un número");
    let n3 = prompt("Inserta un número");

    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);

    if(n1<n2&&n1<n3) {
        alert(n1);
    }
    if(n2<n1&&n2<n3) {
        alert(n2);
    }
    if(n3<n1&&n3<n2) {
        alert(n3);
    }
    if(n1==n2&&n1==n3) {
        alert(n1);
    }
    if(n1==n2&&n1<n3) {
        alert(n1);
    }
    if(n1==n3&&n1<n2) {
        alert(n1);
    }
    if(n2==n3&&n2<n1) {
        alert(n2);
    } 
}



//Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

function ej042() {
    let frase = prompt("Inserta una frase");
    let letra = prompt("Inserta una letra");
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
    if(frase[i] == letra){
        contador++;
    }
    }
    alert ("La cantidad de veces que aparece la "+ letra +" en la frase es: "+ contador + "veces");
}


/*
 Suma o resta (según elija el usuario) dos números reales
FUNCIÓN TRADICIONAL Y FUNCIÓN EXPRESIÓN
*/


function ej043() {
    let n1 = prompt("Inserta un número");
    let n2 = prompt("Inserta un número");
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    let suma_o_resta = prompt("Inserta + para sumar o - para restar");
    let sumar = function suma(n1, n2) {
        return n1+n2; 
    }
    let restar =function resta(n1, n2) {
        return n1-n2;
    }

    if (suma_o_resta="+") {
        alert(sumar);
    } else if (suma_o_resta="-") {
        alert(restar);
    } 
} 

/*
Almacena en dos variables datos de validación (usuario y contraseña) correctos 
y permite que el usuario valide (dispone de 3 intentos).
*/

function ej044() {
    const USER_C = "rainy";
    const PASS_C = "day";
    let contador = 0;
    let user, pass;
    do {
        user = prompt ("inserta usuario");
        pass = prompt ("inserta contraseña");
        if (user!=USER_C || pass!=PASS_C) {
            contador++;
            alert("usuario y/o contraseña incorrecta. Te quedan " + (3-contador) + " intentos");
        }
    } while ((user!=USER_C || pass!=PASS_C) && contador < 3 );
    if (contador<3){
        alert("acertaste");
    }
}


/*
 Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 
y si no es ninguno de los tres, indícale que se ha equivocado de letra.
*/

function ej045() {
    let letra = prompt ("Inserta letra");
    switch (letra) {
    case "a":
        alert (7);
        break;
    case "b":
        alert (9);
        break;
    case "c":
        alert (101);
        break;
    default:
        alert ("Letra fallida");
}
}

/*
Ordena alfabéticamente un array con 7 palabras puedes usar el algoritmo de la burbuja.
IIFE: EXPRESIÓN DE FUNCIÓN EJECUTADA INMEDIATAMENTE
*/

(function ej046() {
let brujitas = ["doremi", "hazuki", "aiko", "poppu", "onpu", "momoko", "hana"];
let aux;

for (let i = 0; i < brujitas.length; i++) {
    for (let j = 0; j < brujitas.length-1; j++) {
        if(brujitas[j+1] < brujitas[j]){
            aux = brujitas[j+1];
            brujitas[j+1] = brujitas[j];
            brujitas[j] = aux;
        }
    }  
}
console.log(brujitas);
})()