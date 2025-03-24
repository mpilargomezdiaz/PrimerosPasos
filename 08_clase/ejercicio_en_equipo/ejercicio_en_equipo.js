function opcion1() {
    let n1 = parseInt (prompt ("Elige un numero: "));
    let n2 = parseInt(prompt("Elige segundo numero: "));

    if (n1 % 2 == 0 && n1 % 25 == 0 && n2 % 2 == 0 && n2 % 25 == 0) {
        alert ("Ambos numeros son pares y multiplos de 25.");
    } else {
        alert("Al menos uno de los dos numeros es impar o no es multiplo de 25");   
    }
   
    if (n1 % 2 == 0 && n1 % 25 == 0) {
        alert ("El numero " + n1 + " es par y multiplo de 25");
    } else if (n1 % 2 == 0 && n1 % 25 != 0) {
        alert("El numero " + n1 + " es par, pero no es multiplo de 25");
    } else if (n1 % 2 != 0 && n1 % 25 == 0) {
        alert("El numero " + n1 + " no es par, pero es multiplo de 25");   
    } else {
        alert("El número " + n1 + " no es ni par, ni multiplo de 25.")
    }
   
    if (n2 % 2 == 0 && n2 % 25 == 0) {
        alert ("El numero " + n2 + " es par y multiplo de 25");
    } else if (n2 % 2 == 0 && n2 % 25 != 0) {
        alert("El numero " + n2 + " es par, pero no es multiplo de 25");
    } else if (n2 % 2 != 0 && n2 % 25 == 0) {
        alert("El numero " + n2 + " no es par, pero es multiplo de 25");   
    } else {
        alert("El número " + n2 + " no es ni par, ni multiplo de 25.")
    }
}

function opcion2() {
    let palabra = prompt("Escribe una palabra");
    
        if (palabra[0].toLowerCase() == "a" && palabra[palabra.length-1].toLowerCase() == "a") {
            alert("La palabra empieza y termina por la letra A");
        }else if (palabra[0].toLowerCase() == "a"){
            alert("La palabra empieza por la letra A");
        } else if (palabra[palabra.length-1].toLowerCase() === "a") {
            alert("La palabra termina por la letra A");
        } else {
            alert("La palabra ni termina ni empieza por la letra A");
        }
    }

function ejercicio2() {
    let frase = prompt("Escribe una frase");
    let contador = 0;
    let n_palabras = 0;
    for(let i=0; i < frase.length; i++){
        if (frase[i] == " "){
            contador ++;
        }
    }
    n_palabras = contador + 1;
    alert("La frase esta formada por " + n_palabras + " palabras");
}

function ejercicio3() {
    let array_cabecera = ["Nombre", "Precio (en euros)", "Descripción", "Calorías"];
    
    let filas = [];
    filas[0] = ["Gofres Belgas", "5.95", "Dos de nuestros famosos Gofres belgas con abundante sirope", "650"];
    filas[1] = ["Gofres Belgas con fresas", "7.95", "Ligeros gofres belgas cubiertos de fresas y de nata montada", "900"];
    filas[2] = ["Gofres Belgas con frutas del bosque", "8.95", "Ligeros gofres belgas cubiertos con frutas del bosque y nata montada", "900"];
    filas[3] = ["Tostada francesa", "4.50", "Dos gruesas rebanadas de nuestro pan francés casero", "600"];
    filas[4] = ["Desayuno de la casa", "6.95", "Dos huevos, bacon o salchicha, tostada y patatas fritas", "950"];

    let tabla = document.createElement("table");
    let tb = document.createElement("tb");

    tabla.style.borderCollapse = "collapse";
    tabla.style.textAlign = "left";
    tabla.style.fontWeight = "bolder";
    tabla.style.marginTop = "10px";

    // Creamos cabecera de la tabla
    let cabecera = document.createElement("tr");
    for (let i= 0; i < array_cabecera.length; i++){
        let celdaCabecera = document.createElement("th");
        let textoCabecera = document.createTextNode(array_cabecera[i]);
        celdaCabecera.appendChild(textoCabecera);
        cabecera.appendChild(celdaCabecera).style.border = "1px solid black";
        celdaCabecera.style.padding = "10px";
    }
    tb.appendChild(cabecera);

    // Creamos filas y columnas de las tablas
    for (let i= 0; i < filas.length; i++){
        let fila = document.createElement("tr");
        for (let j = 0; j < filas[i].length; j++){
            let columna = document.createElement("td");
            let textoColumna = document.createTextNode(filas[i][j]);
            columna.appendChild(textoColumna);
            fila.appendChild(columna).style.border = "1px solid black";
            columna.style.padding = "10px";
        }
        tb.appendChild(fila);
    }

    // Añadimos el cuerpo a la tabla 
    tabla.appendChild(tb);
    // Añadimos la tabla al cuerpo del documento
    document.body.appendChild(tabla);
}

ejercicio3()