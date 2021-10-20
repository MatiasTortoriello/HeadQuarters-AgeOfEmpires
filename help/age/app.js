const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

let promesa = fetch(url).then(response => response.json()).then(json => {
    console.log(json.civilizations)
    const contenedor = document.querySelector('.contenedor ul');
    json.civilizations.forEach(civ => {
        contenedor.innerHTML += `
        <li>${civ.name}</li>
        <li>${civ.id}</li>
        `;

    });
});