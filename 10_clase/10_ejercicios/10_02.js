let contador1 = 0;
let contador2 = 0;
let contador3 = 0;

window.onload = function() { 
    document.getElementById("enlace_1").setAttribute("onclick","ocultarPrimeraSeccion()");
    document.getElementById("enlace_2").setAttribute("onclick","ocultarSegundaSeccion()"); 
    document.getElementById("enlace_3").setAttribute("onclick","ocultarTerceraSeccion()");  
}   

let primer_contenido = document.getElementById("contenidos_1");
let segundo_contenido = document.getElementById("contenidos_2");   
let tercer_contenido = document.getElementById("contenidos_3");

function ocultarPrimeraSeccion() {
    if(contador1 == 0){ 
        primer_contenido.classList.remove("visible");
        primer_contenido.classList.add("oculto");
        document.getElementById("enlace_1").innerHTML = "Visualizar Contenido";
        contador1++;
    } else {
        primer_contenido.classList.remove("oculto");
        primer_contenido.classList.add("visible");
        document.getElementById("enlace_1").innerHTML = "Ocultar contenidos";
        contador1 = 0;
    }
} 

function ocultarSegundaSeccion() {
    if(contador2 == 0){ 
        segundo_contenido.classList.remove("visible");
        segundo_contenido.classList.add("oculto");
        document.getElementById("enlace_2").innerHTML = "Visualizar Contenido";
        contador2++;
    } else {
        segundo_contenido.classList.remove("oculto");
        segundo_contenido.classList.add("visible");
        document.getElementById("enlace_2").innerHTML = "Ocultar contenidos";
        contador2 = 0;
    }
} 

function ocultarTerceraSeccion() {
    if(contador3 == 0){ 
        tercer_contenido.classList.remove("visible");
        tercer_contenido.classList.add("oculto");
        document.getElementById("enlace_3").innerHTML = "Visualizar Contenido";
        contador3++;
    } else {
        tercer_contenido.classList.remove("oculto");
        tercer_contenido.classList.add("visible");
        document.getElementById("enlace_3").innerHTML = "Ocultar contenidos";
        contador3 = 0;
    }
}  
