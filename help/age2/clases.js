class Jugador {
    constructor({
        nombre,
        id,
        civilizacion,
    }) {
        this.nombre = nombre;
        this.id = id;
        this.civilizacion = civilizacion;
    }
}

class Helper {
    static traerStorage() {
        let jugadores = localStorage.getItem("jugadores");
        if (jugadores === null) {
            jugadores = [];
        } else {
            jugadores = JSON.parse(jugadores);
        }
        return jugadores;
    }

    static guardarStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static generarId() {
        return Math.floor(Math.random() * (10000 - 1)) + 1;
    }

    static guardarJugador(jugador) {
        const jugadores = Helper.traerStorage();
        jugadores.push(jugador);
        Helper.guardarStorage('jugadores', jugadores);
    }

    static borrarJugador(id) {
        let jugadores = Helper.traerStorage();
        jugadores = jugadores.filter(jugador => jugador.id != id);
        Helper.guardarStorage('jugadores', jugadores);
    }

    static actualizarDatos() {
        const tabla = document.querySelector('tbody');
        tabla.innerHTML = '';
        const jugadores = Helper.traerStorage();
        jugadores.forEach(jugador => {
            tabla.innerHTML += `
                <tr>
                    <td>
                        ${jugador.nombre}
                    </td>
                    <td>
                        ${jugador.civilizacion}
                    </td>
                    <td>
                        <button id="${jugador.id}" class="button">Eliminar</button>
                    </td>
                </tr>
            `;
        });
    }
}