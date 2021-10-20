//Capturo el formulario y tbody de la tabla
const formulario = document.forms.agregar;
const tabla = document.querySelector('tbody');

//Evento para detectar el botón de agregar
formulario.boton.addEventListener("click", (e) => {
    e.preventDefault();
    Helper.guardarJugador(new Jugador({
        nombre: formulario.nombre.value,
        id: Helper.generarId(),
        civilizacion: formulario.civilizacion.value,
    }));
    Helper.actualizarDatos();
});

//Evento para detectar click en los botones de eliminar
document.querySelector('tbody').addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.tagName === 'BUTTON') {
        Helper.borrarJugador(e.target.id);
        Helper.actualizarDatos();
    }
});

//Quiero que cuando cargue la página se actualice la tabla
Helper.actualizarDatos();