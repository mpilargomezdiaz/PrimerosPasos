let tamaño = parseInt(prompt("Introduce el tamaño del array (número de elementos):"));
let array_fibonacci = [];

if (isNaN(tamaño) || tamaño <= 0) {
    alert("Por favor, introduce un tamaño válido mayor que 0.");
} else {
    array_fibonacci[0] = 1;
    array_fibonacci[1] = 1;
    
    for (let i = 2; i < tamaño; i++) {
        array_fibonacci[i] = array_fibonacci[i - 1] + array_fibonacci[i - 2];
    }

    console.log("Array generado:", array_fibonacci);
    alert("Array generado: " + array_fibonacci.join(", "));
}
