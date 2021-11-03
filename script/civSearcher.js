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
        <li class="${civ.continent} ${civ.culture}" id="showCiv">
        <h3>${civ.name}<h3>
        
        <img src="/img/AoE2Assets/CivIcons/CivIcon-${civ.name}.png">
        
        </li>
        `;
    });
}

loadElements(civilizations);

document.forms.searchBar.addEventListener("input", filterByName);

/*document.getElementById('showCiv').addEventListener('click', function () {

})*/

let showcase = document.getElementById('showCiv')

showcase.addEventListener('click', (e) => {
    console.log(e.target)
})

