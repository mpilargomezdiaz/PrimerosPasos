/* Completar la función muestra de JavaScript para que realice lo siguiente:

 Ocultar el enlace Seguir leyendo.
 Mostrar el texto incluido dentro del span
 Una vez acabada esta parte, realizar lo siguiente:

 Crear un nuevo evento en el enlace2 que llamará a la función oculta().
 Dicha función ocultará el enlace2, el texto el span y volverá a mostrar el enlace Seguir leyendo.
*/

let enlace_a_ocultar = document.getElementById("enlace1");
let aparece = document.getElementById("adicional");
let enlace2 = document.getElementById("enlace2");

function muestra() {
    enlace_a_ocultar.classList.add("oculto");
    aparece.classList.remove("oculto");
    enlace2.classList.remove("oculto");
}

function oculta() {
    enlace2.classList.add("oculto");
    aparece.classList.add("oculto");
    enlace_a_ocultar.classList.remove("oculto");
}

