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
        civList.innerHTML +=  `
        <li>
        <h3><a href="/pages/Civilizations/${civ.name}.html">${civ.name}</a><h3>
        <a href="/pages/Civilizations/${civ.name}.html">
        <img src="/img/AoE2Assets/CivIcons/CivIcon-${civ.name}.png" alt="">
        </a>
        </li>
        `;
    });
}

loadElements(civilizations);

document.forms.searchBar.addEventListener("input", filterByName);