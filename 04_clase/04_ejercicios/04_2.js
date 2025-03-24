let frutas = ["piña", "melocotón", "lichi"];
alert(frutas);


function añadirFruta() {
    frutas.push("mandarina");
    alert(frutas);
}

function borrarFruta() {
    frutas.pop(frutas.length-1);
    alert(frutas);
}