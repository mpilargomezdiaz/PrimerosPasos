/*
 Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 
y si no es ninguno de los tres, indícale que se ha equivocado de letra.
*/

let letra = prompt("Inserta una letra");
if(letra == "a") {
    alert(7);
}
if(letra == "b") {
    alert(9);
}
if(letra == "c") {
    alert(101);
}
if (!(letra == "a")&&!(letra == "b")&&!(letra == "c")) {
    alert("Letra fallida");
}