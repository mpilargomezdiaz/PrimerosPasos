/* Formulario de contacto - Local Storage
 Crear un formulario de contacto con los siguientes campos:
 Nombre
 Email
 Mensaje
 Guardar en Local Storage los datos de contacto enviados de cada usuario
 Mostrar los datos de los contactos guardados usando herramientas de DOM
 Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
 Avanzado - Local Storage
 Crea botón para borrar todos los contactos guardados en Local Storage
 Crea botón para borrar un contacto en concreto de Local Storage, buscando por email
*/

document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("contactForm");
    let listaContactos = document.getElementById("listaContactos");
    let botonBorrarTodo = document.getElementById("borrarTodo");
    let botonBorrarUno = document.getElementById("borrarUno");

    function cargarContactos() {
        let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
        listaContactos.innerHTML = "";

        contactos.forEach(contacto => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${contacto.nombre}</strong> (${contacto.correo}): ${contacto.mensaje}`;
            listaContactos.appendChild(li);
        });
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje").value;

        let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

        contactos.push({ nombre, correo: email, mensaje });

        localStorage.setItem("contactos", JSON.stringify(contactos));

        form.reset();
        cargarContactos();
    });

    botonBorrarTodo.addEventListener("click", function () {
        localStorage.removeItem("contactos");
        cargarContactos();
    });

    botonBorrarUno.addEventListener("click", function () {
        let emailBorrar = document.getElementById("emailBorrar").value;
        let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

        let nuevosContactos = contactos.filter(contacto => contacto.correo !== emailBorrar);

        localStorage.setItem("contactos", JSON.stringify(nuevosContactos));

        cargarContactos();
    });

    cargarContactos();
});
