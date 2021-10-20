
const list = document.getElementById("playerList");

const createId = () => Math.floor(Math.random() * (1000000 - 1)) + 1;

const createLi = (element) => {
    const li = document.createElement("li");
    li.textContent = element.player;
    li.classList.add("player");
    li.classList.add("flex");
    li.setAttribute('id', element.id);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "delete";
    li.appendChild(deleteButton);

    return li;
};

const getPlayers = () => localStorage.getItem("players") === null ? [] : JSON.parse(localStorage.getItem("players"));

const storagePlayers = (players) => localStorage.setItem("players", JSON.stringify(players));

const addPlayer = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const text = document.getElementById("player").value.trim();

    if (text !== "") {

        const player = { id: createId(), player: text };
        list.appendChild(createLi(player));
        const players = getPlayers();
        players.push(player);
        storagePlayers(players);
        
    }
};


const removePlayer = (e) => {

    if (e.target.className === "deleteButton") {
        e.target.parentElement.remove();
        let players = getPlayers();
        players = players.filter(
            (player) => player.id !== parseInt(e.target.parentElement.id)
        );
        storagePlayers(players);
    }
};


const printPlayers = (array) => {
    const fragment = document.createDocumentFragment();
    array.forEach((element) => {
        const li = createLi(element);
        fragment.appendChild(li);
    });
    return fragment;
};

const displayPlayers = () => {
    list.innerHTML = " ";
    let players = getPlayers();
    list.appendChild(printPlayers(players));
};

displayPlayers();

document.getElementById("form").addEventListener("submit", addPlayer);
list.addEventListener("click", removePlayer);