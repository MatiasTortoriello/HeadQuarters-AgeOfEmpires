class Player {

    constructor({name, id, civilization, nationality,}) 
    {
        this.name = name;
        this.id = id;
        this.civilization = civilization;
        this.nationality = nationality
    }
}

class Helper {
    static bringStorage() {
        let players = localStorage.getItem("players");
        if (players === null) {
            players = [];
        } else {
            players = JSON.parse(players);
        }
        return players;
    }

    static storageData(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static generateId() {
        return Math.floor(Math.random() * (10000 - 1)) + 1;
    }

    static savePlayer(player) {
        const players = Helper.bringStorage();
        players.push(player);
        Helper.storageData('players', players);
    }

    static deletePlayer(id) {
        let players = Helper.bringStorage();
        players = players.filter(player => player.id != id);
        Helper.storageData('players', players);
    }

    static updateData() {
        const table = document.querySelector('tbody');
        table.innerHTML = '';
        const players = Helper.bringStorage();
        players.forEach(player => {
            table.innerHTML += `
                <tr>
                    <td>
                        ${player.name}
                    </td>
                    <td>
                        ${player.civilization}
                    </td>
                    <td>
                        ${player.nationality}
                    </td>
                    <td>
                        <button id="${player.id}" class="button">X</button>
                    </td>
                </tr>
            `;
        });
    }
}