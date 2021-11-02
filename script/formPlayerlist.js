const form = document.forms.addPlayer;
const table = document.querySelector('tbody');

form.addEventListener("submit", (e) => {

    e.preventDefault();
    Helper.savePlayer(new Player({
        
        name: form.name.value,
        id: Helper.generateId(),
        civilization: form.civilization.value,
        nationality: form.nationality.value
    }));

    Helper.updateData();
    form.reset()
});

document.querySelector('tbody').addEventListener("click", (e) => {


    e.preventDefault();
    e.stopPropagation();

    if (e.target.tagName === 'BUTTON') {

        Helper.deletePlayer(e.target.id);
        Helper.updateData();

    }
});

Helper.updateData();

