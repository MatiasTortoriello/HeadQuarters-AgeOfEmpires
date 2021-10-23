const civilizationsList = document.getElementById('civList');
const searchBar = document.getElementById('searchBar');
let aoe2Civs = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCivs = aoe2Civs.filter((civilizations) => {
        return (
            civilizations.name.toLowerCase().includes(searchString)
        );
    });
    displayCivs(filteredCivs);
});

const displayCivs = async () => {
    try {
        //const url = 'https://api.json-generator.com/templates/-PG2Ze3sWp15/data';
        let aoe2Civs = fetch("../json/AoE2_Civs.json").then(response => response.json()).then(json => {
        console.log(json.civilizations)
        aoe2Civs = json.civilizations
        console.log(aoe2Civs)
        const civList = document.querySelector('#civList');
        json.civilizations.forEach(civ => {
        civList.innerHTML += `
        <li>
        <h3><a href="/pages/pagesAoE2/${civ.name}.html">${civ.name}</a><h3>
        <a href="/pages/Civilizations/${civ.name}.html">
        <img src="/img/AoE2Assets/CivIcons/CivIcon-${civ.name}.png" alt="">
        </a>
        </li>
        `;
    });
});
    } catch (err) {
        console.error(err);
    }
};

displayCivs();