/* const getCiv = async(id) => {
    const URL = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/';

    return fetch(`${URL}${id}`).then(response => response.json()).then(json => json);
}

const showCivilization = (civ) => {
    const container = document.querySelector('#civShowcase');
    container.innerHTML = `
    <img  id="showCiv" src="/img/AoE2Assets/CivIcons/CivIcon-${civ.name}.png">
    `;
}

document.getElementById('civList').addEventListener('click', async(e) => {
    const element = e.target;
    if (element.tagName === "H3" || element.tagName === "IMG") {
        const civ = await getCiv(element.parentNode.id);
        showCivilization(civ);
    }
}); */
const getCiv = async(id) => {
    const URL = '../json/AoE2_Civs.json';
    return fetch(URL).then(response => response.json()).then(json => json.find(civ => civ.id == id));
}

const showCivilization = (civ) => {
    const container = document.querySelector('#civShowcase');
    container.innerHTML = `
    
    <div class="civProperties text-center">
    <img src="/img/AoE2Assets/CivIcons/CivIcon-${civ.name}.png">
        <h2>${civ.name}</h2>
        <p>${civ.culture} culture (${civ.continent})<p>
        <p>${civ.info}</p>

    </div>
    `;
}


document.getElementById('civList').addEventListener('click', async(e) => {
    const element = e.target;
    if (element.tagName === "IMG") {
        const civ = await getCiv(element.parentNode.id);
        showCivilization(civ);
    }
});

const filterByName = (e) => {

    const searchString = e.target.value.toLowerCase();

    const filter = civilizations.filter((obj) => {
        return (
            obj.name.toLowerCase().includes(searchString)
        );
    });
    loadElements(filter);
}



const loadElements = (array) => {

    const civList = document.getElementById('civList');

    civList.innerHTML = '';

    array.forEach(civ => {
        civList.innerHTML += `
        <div class="text-center ${civ.continent} showCiv">
        <p class="border bg-black">${civ.name}</p>
        <li id="${civ.id}">
                <img src="/img/AoE2Assets/CivIcons/CivIcon-${civ.name}.png">
        </li>
        </div>
        `;
    });
}

loadElements(civilizations);

document.forms.searchBar.addEventListener("input", filterByName);
