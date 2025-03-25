let u = "rainy";
let c = "days";
let contador = 0;
let usuario = prompt("Inserta un usuario");
let contraseña = prompt("Inserta una contraseña");

if (usuario == u && contraseña == c) {
    alert("datos correctos");
} else {
    alert("datos incorrectos");
    do {
        usuario = prompt("Inserta un usuario") + contador;
        contraseña = prompt("Inserta una contraseña") + contador;
        contador++;
    } while (usuario == u && contraseña == c && contador < 2);
}
alert("datos correctos");