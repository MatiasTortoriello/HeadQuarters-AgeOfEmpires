class Jugador {

    constructor({


        nombreJugador, 
        idJugador, 
        mainCivJugador, 
        nacionalidadJugador,
        rankJugador,
        jugadorProfesional = false,

    }){

        this.nombre = nombreJugador;
        this.id = idJugador ;
        this.mainCiv = mainCivJugador;
        this.nacionalidad = nacionalidadJugador;
        this.rank = rankJugador;
        this.profesional = jugadorProfesional;
        
    }
}

//VARIABLES

let jugadores_age1 = [];
let jugadores_age2 = [];
let jugadores_age3 = [];
let jugadores_age4 = [];


 //FUNCIONES


//Función de CREAR USUARIO
const crearJugador = () => {

    const jugadorAge1 = new Jugador({

        nombre : document.getElementById("nombreJugador").value,
        id : document.getElementById("id").value,
        mainCiv : document.getElementById("civilizacion").value,
        nacionalidad: document.getElementById("nacionalidad").value,
        rank : document.getElementById("rank").value,
        profesional : document.getElementById("profesional").value,
    })

    let jugador;
    if (localStorage.getItem("jugadores_age1") != null) {

        jugador = JSON.parse(localStorage.getItem("jugadores_age1"))
        jugador.push(jugadorAge1)
        localStorage.setItem("jugadores_age1", JSON.stringify(jugador))
    }
    jugadores_age1.push(jugadorAge1)

    return jugadorAge1
}

//Funcion de Guardar Datos
const guardarEnBaseDeDatos = () => {

    crearJugador()

    if (verificarStorage() != undefined) {
        localStorage.setItem("jugadores_age1", JSON.stringify(verificarStorage()))
    } else {
        localStorage.setItem("jugadores_age1", JSON.stringify(jugadores_age1))
    }
}

//Funcion de Verificar Storage
const verificarStorage = () => {
    let datosJugadores = [];
    if (localStorage.getItem("jugadores_age1") != null) {
        datosJugadores = JSON.parse(localStorage.getItem("jugadores_age1"))
        return datosJugadores
    }
}

//Función Imprimir Datos
const imprimirDatos = () => {

    let indice = 0

    verificarStorage().forEach(obj => {

        indice += 1

        document.getElementById("tabla").innerHTML += `
        <tr>
            <td>${indice}</td>
            <td>${obj.nombre}</td>
            <td>${obj.id}</td>
            <td>${obj.mainCiv}</td>
            <td>${obj.nacionalidad}</td>
            <td>${obj.rank}</td>
            <td>${!obj.profesional ?'Si':'No'}</td>
            <td><button onclick=elimiarDeLaLista(${obj.id})>X</button></td>
        </tr>
        `
    });
}

//Función Eliminar de la lista
const elimiarDeLaLista = (id) => {

    let listaVieja = JSON.parse(localStorage.getItem("jugadores_age1"))
    let listaNueva = listaVieja.filter(e => e.id != id)

    localStorage.setItem("jugadores_age1", JSON.stringify(listaNueva))
    location.reload()

}


// EVENTOS

document.getElementById("btnSave").addEventListener("click", () => {
    guardarEnBaseDeDatos()
})

if (localStorage.getItem("jugadores_age1") != null) {
    imprimirDatos()
}

console.log(verificarStorage())