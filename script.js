/* script.js */

// Inicializar EmailJS con tu Public Key
emailjs.init("9AMoI8g1v9y5S7nyY");

// -----------------------------
// FUNCIONES PARA LOCALSTORAGE
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
// FORMULARIO DE DATOS PERSONALES (datos.html)
// -----------------------------
const datosCampos = ["ci", "nombre", "apellido", "direccion", "sexo", "ciudad", "telefono", "fecha", "correo"];
const formDatos = document.getElementById("formDatos");

if (formDatos) {
cargarCamposLocalStorage(datosCampos, formDatos);

```
formDatos.addEventListener("input", () => {
    guardarCamposLocalStorage(datosCampos, formDatos);
});

formDatos.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_ax91m5y", "template_datos", this)
    .then(() => {
        alert("Datos personales enviados correctamente!");
        localStorage.clear();
        this.reset();
    })
    .catch((error) => {
        console.error("Error al enviar datos personales:", error);
        alert("Hubo un error al enviar los datos. Revisa la consola.");
    });
});
```

}

// -----------------------------
// FORMULARIO DE ENCUESTA (encuesta.html)
// -----------------------------
const encuestaCampos = ["gustos_musicales", "gustos_deportivos", "estudios", "laboral", "opinion"];
const formEncuesta = document.getElementById("formEncuesta");

if (formEncuesta) {
cargarCamposLocalStorage(encuestaCampos, formEncuesta);

```
formEncuesta.addEventListener("input", () => {
    guardarCamposLocalStorage(encuestaCampos, formEncuesta);
});

formEncuesta.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_ax91m5y", "template_encuesta", this)
    .then(() => {
        alert("Encuesta enviada correctamente!");
        localStorage.clear();
        this.reset();
    })
    .catch((error) => {
        console.error("Error al enviar la encuesta:", error);
        alert("Hubo un error al enviar la encuesta. Revisa la consola.");
    });
});
```

}
