//Número de enlaces de la página

let enlaces = document.getElementsByTagName('a');
alert(enlaces.length);

//Dirección a la que enlaza el penúltimo enlace

function ejecutar() {
    alert(enlaces[enlaces.length - 2]);
}

//Numero de enlaces que enlazan a http://prueba


function prueba() {
    let contador = 0;
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href == "http://prueba/") {
            contador++
        }
    }
    alert(contador);
}

//Número de enlaces del tercer párrafo

function enlaces_tercer_parrafo(){
    
    let parrafo = document.getElementsByTagName("p");
    let enlace = parrafo[2].getElementsByTagName("a");
    alert("el número de enlaces del tercer párrafo son: " + enlace.length);
}