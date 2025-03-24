function crearTd(texto) {
    let nodoText = document.createTextNode(texto);
    let nodoTd = document.createElement("td");
    nodoTd.appendChild(nodoText);
    return nodoTd;
}

function crearTr(datosTds) {
    let nodoTr = document.createElement("tr");
    for (let i = 0; i < datosTds.length; i++) { //Columnas
        nodoTr.appendChild(crearTd(datosTds[i]));
    }
    return nodoTr;
}

function crearTable(datosTrs) {
    let nodoTable = document.createElement("table");
    for (let i = 0; i < datosTrs.length; i++) { //filas
        nodoTable.appendChild(crearTr(datosTrs[i]));
    }
    return nodoTable;
}


const datosTrs = [
                    ["a", "b", "c", "d"], 
                    ["e", "f", "g", "h", "j"]
                ];

document.body.appendChild(crearTable(datosTrs));