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

