function validateEmail() {
    let emailField = document.getElementById("user-email");
    let emVal = document.getElementById("emVal");
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (validEmail.test(emailField.value)) {
      emVal.innerHTML = "Es un email válido";
      emVal.style.color = "green";
    } else {
      emVal.innerHTML = "Datos no válidos!";
      emVal.style.color = "red";
    }
  } 
  function validateEmail2() {
    let emailField2 = document.getElementById("user-email2");
    let ok = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let emVal2 = document.getElementById("emVal2");
    if (ok.test(emailField2.value)) {
      emVal2.innerHTML = "Es un email válido";
      emVal2.style.color = "green";
    } else {
      emVal2.innerHTML = "Datos no válidos!";
      emVal2.style.color = "red";
    }
    
  }
  
  function validateEmail21() {
    let emailField = document.getElementById("user-email").value;
    let emailField2 = document.getElementById("user-email2").value;
    let emVal21 = document.getElementById("emVal21");
    
    if (emailField === emailField2 ) {
      emVal21.innerHTML = "Datos correctos!";
      emVal21.style.color = "green";
    } else {
      emVal21.innerHTML = "Los email no coinciden";
      emVal21.style.color = "red";
    }
  }
  function validacionNombre() {
  const caracteres = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let nombre = document.getElementById("nombre").value;
    let nVal = document.getElementById("nomVal");
    console.log(nombre);
    let validacionS = new Boolean(caracteres.test(nombre));
    if (
      (nombre.charAt(0) === nombre.charAt(0).toUpperCase()) && !(/\d/.test(nombre)) && !(validacionS.valueOf())
    ) {
      // alert("datos correctos");
      nVal.innerHTML = "Nombre válido!";
      nVal.style.color = "green";
      console.log("numeros= " + /\d/.test(nombre));
      console.log("caracteres.test =" + validacionS.valueOf());
    } else {
      // alert("datos incorrectos");
      nVal.innerHTML = "Nombre no válido!";
      nVal.style.color = "red";
      console.log("numeros= " + /\d/.test(nombre) );
      console.log("caracteres.test =" + validacionS.valueOf());
      }
    }
  
  function validarApellidos() {
    let apellidos = document.getElementById("apellidos").value;
    let apeVal = document.getElementById("apeVal");
    let caracteres = /^[A-Za-z\s]+$/;
    if (
      apellidos.charAt(0) === apellidos.charAt(0).toUpperCase() &&
      caracteres.test(apellidos)
    ) {
      apeVal.innerHTML = "Apellidos válidos!";
      apeVal.style.color = "green";
    } else {
      apeVal.innerHTML = "Apellidos no válidos!";
      apeVal.style.color = "red";
    }
  }
  
  //f. DNI: Debe ser un DNI válido. Se trata de un campo obligatorio.
  
  function validarDNI() {
    const DNI = document.getElementById("DNI").value.trim(); //Trim borra los espacion del inicio y del final
    const resultadoDNI = document.getElementById("resultadoDNI");
  
    // Verificar longitud y formato del DNI (8 números + 1 letra)
    let esValido = DNI.length === 9;
    for (let i = 0; i < 8; i++) {
      //verificar si los 8 primeros carácteres son números
      if (isNaN(DNI[i])) {
        esValido = false;
      }
    }
    const ultimaLetra = DNI.charAt(8); //saber el índice
    if (
      !(ultimaLetra >= "A" && ultimaLetra <= "Z") 
    ) {
      esValido = false;
    }
  
    // Mostrar resultado
    if (esValido) {
      resultadoDNI.textContent = "DNI válido";
      resultadoDNI.style.color = "green";
    } else {
      resultadoDNI.textContent =
        "El DNI debe tener 8 números seguidos de 1 letra mayúscula";
      resultadoDNI.style.color = "red";
    }
  }
  
  //g. Validación de Intereses
  function validarIntereses() {
    const intereses = document.getElementById("Intereses").value.split(","); //separamos por comas
    const resultadoIntereses = document.getElementById("resultadoIntereses");
    const interesesValidos = [
      "mercado inmobiliario",
      "bolsa",
      "bienes estatales",
    ];
    let interesesSeleccionados = [];
  
    // Validar cada interés ingresado
    for (let i = 0; i < intereses.length; i++) {
      let interes = intereses[i].trim().toLowerCase();
      if (interesesValidos.includes(interes)) {
        interesesSeleccionados.push(interes);
      }
    }
  
    // Mostrar resultado
    if (interesesSeleccionados.length > 0) {
      resultadoIntereses.textContent =
        "Intereses válidos: " + interesesSeleccionados.join(", "); //separado por una coma
      resultadoIntereses.style.color = "green";
    } else {
      resultadoIntereses.textContent =
        "Debe incluir al menos uno de los intereses válidos: Mercado inmobiliario, Bolsa, Bienes estatales";
      resultadoIntereses.style.color = "red";
    }
  }
  
  //h. Validación de Contraseña
  function validarPassword() {
    const password = document.getElementById("password").value;
    const resultadoPassword = document.getElementById("resultadoPassword");
  
    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let contadorNumeros = 0;
    let tieneSimbolo = false;
    const simbolos = "!@#$%^&*()_+-={}[]|:;<>,.?/~`";
  
    // Validar cada carácter de la contraseña
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
  
      if (char >= "A" && char <= "Z") {
        tieneMayuscula = true;
      } else if (char >= "a" && char <= "z") {
        tieneMinuscula = true;
      } else if (char >= "0" && char <= "9") {
        contadorNumeros++;
      } else if (simbolos.indexOf(char) !== -1) {
        tieneSimbolo = true;
      }
    }
  
    // Verificar que cumpla todas las condiciones
    if (
      password.length >= 8 &&
      password.length <= 20 &&
      tieneMayuscula &&
      tieneMinuscula &&
      contadorNumeros >= 2 &&
      tieneSimbolo
    ) {
      resultadoPassword.textContent = "Contraseña válida";
      resultadoPassword.style.color = "green";
    } else {
      resultadoPassword.textContent =
        "La contraseña debe tener entre 8 y 20 caracteres, una mayúscula, una minúscula, dos números y un símbolo";
      resultadoPassword.style.color = "red";
    }
  }