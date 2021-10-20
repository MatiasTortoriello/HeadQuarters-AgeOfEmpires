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
        const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';
        let aoe2Civs = fetch(url).then(response => response.json()).then(json => {
        console.log(json.civilizations)
        aoe2Civs = json.civilizations
        console.log(aoe2Civs)
        const civList = document.querySelector('#civList');
        json.civilizations.forEach(civ => {
        civList.innerHTML += `
        <li>
        <h3>${civ.name}<h3>
        <p>Army type: ${civ.army_type}</p>
        </li>
        `;
    });
});
    } catch (err) {
        console.error(err);
    }
};

displayCivs();