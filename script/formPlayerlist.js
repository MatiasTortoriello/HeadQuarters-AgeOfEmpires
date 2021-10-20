//Capturo el formulario y tbody de la tabla
const form = document.forms.addPlayer;
const table = document.querySelector('tbody');

//Evento para detectar el botón de agregar
form.button.addEventListener("click", (e) => {
    e.preventDefault();
    Helper.savePlayer(new Player({
        name: form.name.value,
        id: Helper.generateId(),
        civilization: form.civilization.value,
        nationality: form.nationality.value
    }));
    Helper.updateData();
});

//Evento para detectar click en los botones de eliminar
document.querySelector('tbody').addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.tagName === 'BUTTON') {
        Helper.deletePlayer(e.target.id);
        Helper.updateData();
    }
});

//Quiero que cuando cargue la página se actualice la tabla
Helper.updateData();