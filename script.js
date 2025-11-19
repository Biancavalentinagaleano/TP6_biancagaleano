emailjs.init("9AMoI8g1v9y5S7nyY");

// Campos a guardar para la encuesta
const encuestaCampos = ["gustos_musicales", "gustos_deportivos", "estudios", "laboral", "opinion"];
const datosCampos = ["ci", "nombre", "apellido", "direccion", "sexo", "ciudad", "telefono", "fecha", "correo"];

// -----------------------------
// FUNCIONES COMUNES
// -----------------------------

function guardarCamposLocalStorage(campos, form) {
campos.forEach(campo => {
localStorage.setItem(campo, form.elements[campo].value);
});
}

function cargarCamposLocalStorage(campos, form) {
campos.forEach(campo => {
const valor = localStorage.getItem(campo);
if (valor) form.elements[campo].value = valor;
});
}

// -----------------------------
// FORMULARIO DE DATOS PERSONALES
// -----------------------------
const formDatos = document.getElementById("formDatos");
if (formDatos) {
cargarCamposLocalStorage(datosCampos, formDatos);


formDatos.addEventListener("input", () => {
    guardarCamposLocalStorage(datosCampos, formDatos);
});

formDatos.addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_ax91m5y", "template_lvqkfbv", this)
        .then(() => {
            alert("Datos personales enviados correctamente!");
            localStorage.clear(); // opcional, si quieres limpiar después de enviar
            this.reset();
        }, (error) => {
            alert("Error al enviar los datos: " + JSON.stringify(error));
        });
});


}

// -----------------------------
// FORMULARIO DE ENCUESTA
// -----------------------------
const formEncuesta = document.getElementById("formEncuesta");
if (formEncuesta) {
cargarCamposLocalStorage(encuestaCampos, formEncuesta);


formEncuesta.addEventListener("input", () => {
    guardarCamposLocalStorage(encuestaCampos, formEncuesta);
});

formEncuesta.addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_ax91m5y", "template_lvqkfbv", this)
        .then(() => {
            alert("Encuesta enviada correctamente!");
            localStorage.clear(); // opcional
            this.reset();
        }, (error) => {
            alert("Error al enviar la encuesta: " + JSON.stringify(error));
        });
});


}
