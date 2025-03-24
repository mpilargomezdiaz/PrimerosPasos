function crearNodoLista(tipo, texto) {
    let nodoText = document.createTextNode(texto);
    let nodo;
    if(tipo == "dt")
        nodo = document.createElement("dt");
    else   
        nodo = document.createElement("dd");
    nodo.appendChild(nodoText);
    return nodo;
}

function crearLista(datos) {
    let nodoDl = document.createElement("dl");
    for (let i = 0; i < datos.length; i++) { 
        nodoDl.appendChild(crearNodoLista("dt",datos[i][0]));
        nodoDl.appendChild(crearNodoLista("dd",datos[i][1]));
    }
    return nodoDl;
}
const datosLista = [
                    ["Red Telefónica Conmutada (RTC)", "La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem."], 
                    ["Red Digital de Servicios Integrados (RDSI)", "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI."],
                    ["Línea de Abonado Digital Asimétrica (ADSL)", "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL."],
                    ["Fibra Óptica", "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial."]
                ];

document.body.appendChild(crearLista(datosLista));