function crearNodoLista(tipo, texto) {
    let nodoText = document.createTextNode(texto);
    let nodo;
    if (tipo == "dt") {
        nodo = document.createElement("dt");
    } else {
        nodo = document.createElement("dd");
    }
    nodo.appendChild(nodoText);
    return nodo;
}

function crearLista(datos) {
    let nodoDl = document.createElement("dl");
    for (let i = 0; i < datos.length; i++) {
        nodoDl.appendChild(crearNodoLista("dt", datos[i][0]));
        nodoDl.appendChild(crearNodoLista("dd", datos[i][1]));
    }
    return nodoDl;
}

const datosLista = [
    ["Red Telefónica Conmutada (RTC)", "La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem."],
    ["Red Digital de Servicios Integrados (RDSI)", "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI."],
    ["Línea de Abonado Digital Asimétrica (ADSL)", "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL."],
    ["Fibra Óptica", "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial."]
];


const listaContainer = document.getElementById("lista-container");
const listaDl = crearLista(datosLista);
listaContainer.appendChild(listaDl);


function insertarDefinicion() {
    const termino = prompt("Introduce el término:");
    const definicion = prompt("Introduce la definición:");
    if (termino && definicion) {
        listaDl.appendChild(crearNodoLista("dt", termino));
        listaDl.appendChild(crearNodoLista("dd", definicion));
    } else {
        alert("Por favor, ingresa tanto el término como la definición.");
    }
}


function eliminarDefinicion() {
    const listaDl = listaContainer.querySelector("dl");
    if (listaDl && listaDl.children.length > 0) {
        listaDl.removeChild(listaDl.lastElementChild);
        listaDl.removeChild(listaDl.lastElementChild);
    } else {
        alert("No hay definiciones para eliminar.");
    }
}
