/*class Civilization {
    constructor ({civId, civName, civCulture, civExpansion, civArmy, civUniqueUnit, civUniqueTech, civTeamBonus, civBonus}) {
       
        this.id = civId,
        this.name = civName,
        this.culture = civCulture,
        this.expansion = civExpansion,
        this.army = civArmy,
        this.uniqueUnit = civUniqueUnit,
        this.uniqueTech = civUniqueTech,
        this.teamBonus = civTeamBonus,
        this.bonus = civBonus
    }
    showciv() {
        console.log(`The ${this.name} are from the ${this.culture} culture. They were added con the ${this.expansion} xpac. Their unique unit are the ${this.uniqueUnit}`)    
    }

}

let civilizations = [];

civilizations.push(new Civilization(
    {civId: 01, 
    civName: "Aztecs",
    civCulture:"american",
    civExpansion:"The Conquerors",
    civArmy: "Infantry",
    civUniqueUnit:"jaguar warrior",
    civUniqueTech:"garland wars",
    civTeamBonus: "Relics generate +33% gold",
    civBonus:"Villagers carry +5, Military units created 15% faster, +5 Monk hit points for each Monastery technology, Loom free"},

))

civilizations.push(new Civilization(
        {civId: 02, 
        civName: "Britons",
        civCulture:"western europe",
        civExpansion:"The Age of Kings",
        civArmy: "archery",
        civUniqueUnit:"longbowman",
        civUniqueTech:"yeomen",
        civTeamBonus: "Archery Ranges work 20% faster",
        civBonus:"Town Centers cost -50% wood upon reaching the Castle Age, Foot archers (excluding Skirmishers) have +1 range in Castle Age and +1 in Imperial Age (for +2 total), Shepherds work 25% faster"},
        

))

function printElements(array) {

    let printElements = document.getElementById("civList")

    array.forEach(element => {

        let index = array.indexOf(element)
        printElements.innerHTML += `
        <p class="text-light mt-1">
        Civ number ${index+1}: ${element.name}
        </p>
        `

    })
}

printElements(civilizations)


const civList = document.getElementById("civList")
const searchBar = document.getElementById("searchBar")

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCivs = civilizations.filter((civilizations) => {
        return (
            civilizations.name.toLowerCase().includes(searchString)
        );
    });

    printElements(filteredCivs);

})*/


const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

let promise = fetch(url).then(response => response.json()).then(json => {

    console.log(json.civilizations)
    const contenedor = document.querySelector('#civList');
    json.civilizations.forEach(civ => {
        contenedor.innerHTML += `
        <li>
        <p>Name: ${civ.name}<br> Army type: ${civ.army_type}</p>
        </li>
        `;
    });
});




/*let printCivs = document.getElementById("civList")

civilizations.forEach(element => {
    
    let index = civilizations.indexOf(element)
    printCivs.innerHTML += `
    <p class="text-light mt-1">
    Civ number ${index+1}: ${element.name}
    </p>
    `
})*/

/*
/*let civsAoE2 = [];
civsAoE2.push(civilizations)

const civList = document.getElementById("civList")
const searchBar = document.getElementById("searchBar")
let civsAoE2 = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCivs = civsAoE2.filter((civilizations) => {
        return (
            civilizations.name.toLowerCase().includes(searchString)
        );
    });

    displayCivs(filteredCivs);

})



const displayCivs = (civilizations) => {
    const contenedor = document.querySelector('#civList');
    json.civilizations.forEach(civilizations => {
        contenedor.innerHTML += `
        <li>${civilizations.name}</li>
        `;
    });

}

/*




const loadCivs = async () => {
    try {
        const res = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
        civsAoE2 = await res.json();
        displayCivs(civsAoE2);
    } catch (err) {
        console.error(err);
    }
};

const displayCivs = (civilizations) => {
    const htmlString = civilizations
        .map((civilizations) => {
            return `
            <li class="civilizations">
                <h2>${civilizations.name}</h2>
            </li>
        `;
        }).join('');
    civList.innerHTML = htmlString;
};

loadCivs();

//const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/';

/*let civs = fetch(`${url}civilizations`).then(response => response.json()).then(json => {
    //Este es el objeto global
    console.log(json)
        //Esto es después de revisar, vi que devolvía un array y por eso lo pude recorrer
    console.log(json.civilizations)

});*/
/*let units = fetch(`${url}units`).then(response => response.json()).then(json => {
    //Pongo un console para ver qué trae
    console.log(json)
        //Veo que hay un array llamado json.units, entonces lo uso para imprimir en la pantalla
    console.log(json.units)
    json.units.forEach(element => {
        document.write(element.name + ", ");
    });
});*/
 
/*let promesa = fetch(url).then(response => response.json()).then(json => {
    console.log(json.civilizations)
    const contenedor = document.querySelector('.contenedor ul');
    json.civilizations.forEach(civ => {
        contenedor.innerHTML += `
        <li>${civ.name}</li>
        `;
        const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

    });
});*/




/*const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

let promesa = fetch(url).then(response => response.json()).then(json => {
    console.log(json.civilizations)
    const contenedor = document.querySelector('.contenedor ul');
    json.civilizations.forEach(civ => {
        contenedor.innerHTML += `
        <li>${civ.name}</li>
        `;

    });
});*/