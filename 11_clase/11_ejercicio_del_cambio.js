/*let caja = [[500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
[0, 0, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1]];*/
let caja = [[500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
[0, 0, 0, 0, 4, 0, 0, 5, 5, 0, 2, 0, 0, 0, 0]];


let pago = [[500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

let devolver = [[500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

let importe = 5;

function total(efectivo) {
    let resultado = 0
    for (let i = 0; i < efectivo[0].length; i++) {
        resultado += efectivo[0][i] * efectivo[1][i];
    }
    resultado = parseFloat(resultado.toFixed(2));
    efectivo[0].push(resultado);
    return efectivo;
}
pago = total(pago);
caja = total(caja);

console.log("caja original: " + caja);

function buscar(efectivo, cambio) {
    let pos = 0;
    while (efectivo[0][pos] >= cambio) {
        pos++;
    }
    if (efectivo[0][pos - 1] == cambio)
        return pos - 1;
    else
        return pos;
}

function hayCambio(efectivo, cambio) {
    let pos = buscar(efectivo, cambio);
    let nBilletes;
    // console.log("cambio: " + cambio);
    // console.log("pos: " + pos);
    // console.log("efectivo[1].length: " + efectivo[1].length);
    while (cambio > 0 && pos < efectivo[1].length) {
        //console.log("cambio: " + cambio);
        //console.log("pos: " + pos);
        //console.log("Número de billetes: " + nBilletes);
        nBilletes = Math.trunc((cambio / efectivo[0][pos]));
        if (nBilletes <= efectivo[1][pos] && nBilletes >= 1) {
            let aux = efectivo[0][pos] * nBilletes; // auxiliar lo que debemos restar a cambio.
            cambio -= aux;
            aux = caja[1][pos] - nBilletes;
            caja[1][pos] = aux;
            return efectivo, cambio;
        } else {
            pos++;
        }
    }
    caja[0].pop();
    return cambio == 0;
}
//alert(buscar(caja, 45));
//alert(total(pago));
//alert(hayCambio(caja, 45));

// alert(pago[0][pago[0].length-1]);

//console.log("total caja: " + total(caja));
//console.log("total pago: " + total(pago));
//console.log("importe: " + importe);


//*Si el importe es igual que el pago
if (importe - pago[0][pago[0].length - 1] == 0) { //Importe justo
    alert("Importe justo");
} else {
    //Si el pago es mayor que la caja
    if (pago[0][pago[0].length - 1] - importe > caja[0][caja[0].length - 1]) {//no hay cash
        alert("No hay cambio disponible");
    } else { // no paga suficiente cash
        if (pago[0][pago[0].length - 1] < importe) {
            alert("falta cash");
        } else {
            console.log("Necesito cambio y tengo cambio");
            let cambio = pago[0][pago[0].length - 1] - importe;
            console.log("calculo de cambio: " + cambio);
            hayCambio(caja, cambio);
        }
    }

}