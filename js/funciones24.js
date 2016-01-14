/*global window */
/*jslint browser: true*/

// JavaScript Document
// Origin: video24.html

// "use strict";

//1. Definición de Objetos y Variables
var datosUsuario,
    usuario,
    email,
    edad,
    rango,
    enviar;

//1.1 Extracción de elementos desde HTML
datosUsuario = document.getElementById('datos-usuario');
usuario = document.getElementById("usuario");
email = document.getElementById("email");
edad = document.getElementById('edad');
rango = document.getElementById('rango');
enviar = document.getElementById('enviar');


//2. Definición de Funciones
function validarTiempoReal(e) {
    "use strict";
    var elemento = e.target;
    if (elemento.validity.valid === true) {
        elemento.style.background = "#FFFFFF";
    }
    else {
        elemento.style.background = "#FFDDDD";
    }
}


function validarUsuario(e) {
    "use strict";
    var elemento;
    elemento = e.target;
    elemento.style.background = "#FFDDDD";
}

function cambiarRango() {
    "use strict";
    var calculo;
    calculo = edad.value - 30;

    if (calculo < 30) {
        calculo = 0;
        edad.value = 30;
    }

    rango.innerHTML = calculo + " a " + edad.value;
}

function enviarFormulario() {
    "use strict";
    var correcto = datosUsuario.checkValidity();

    if (correcto === true) {
        datosUsuario.submit();
    }
}

function cargaDocumento() {
    "use strict";
    datosUsuario.addEventListener("input", validarTiempoReal, false);
    datosUsuario.addEventListener("invalid", validarUsuario, true);
    edad.addEventListener("change", cambiarRango, false);
    enviar.addEventListener("click", enviarFormulario, false);
}

//3. Asignación de Eventos
window.addEventListener("load", cargaDocumento, false);
