// Objetos:

class Videojuego {
    constructor (nombreJuego, nuevoGenero, nuevoDesarrollador, nuevaFecha) {

        this.nombre = nombreJuego,
        this.genero = nuevoGenero,
        this.desarrollador = nuevoDesarrollador,
        this.fechaDeLanzamiento = nuevaFecha
        
    }
    presentarJuego() {
        console.log(`El ${this.nombre} es un juego de ${this.genero} desarrollado por ${this.desarrollador} en ${this.fechaDeLanzamiento}`)
    }
}
const AgeOfEmpires = new Videojuego (nombre = "Age of Empires I", genero = "Real Time Strategy", desarrollador = "Ensemble Studios", fechaDeLanzamiento = 1997);
AgeOfEmpires.presentarJuego();


let listaDeJuegos = [];

//Age of Empires games
listaDeJuegos.push(new Videojuego("Age of Empires 1", "Real Time Strategy", "Ensemble Studios", 1997))
listaDeJuegos.push(new Videojuego("Age of Empires 2", "Real Time Strategy", "Ensemble Studios", 1999))
listaDeJuegos.push(new Videojuego("Age of Empires 3", "Real Time Strategy", "Ensemble Studios", 2005))
listaDeJuegos.push(new Videojuego("Age of Empires 4", "Real Time Strategy", "Relic Enterteinment", 2021))



listaDeJuegos.sort((a,b) => {
    if (a.fechaDeLanzamiento < b.fechaDeLanzamiento){
        return -1
    } 
    if (a.fechaDeLanzamiento > b.fechaDeLanzamiento){
        return 1
    }
    return 0
})

console.log(listadoCompleto);

/*function agregarJuego(){
    this.nombre = prompt("Ingrese el nombre del juego");
    this.genero = prompt("Ingrese el género del juego");
    this.desarrollador = prompt("Ingrese el desarrollador del juego");
    this.fechaDeLanzamiento = Number(prompt("Ingrese el año de lanzamiento del juego"));
    let nuevoJuego = new Videojuego(this.nombre, this.genero, this.desarrollador, this.fechaDeLanzamiento)
    listadoCompleto.push(nuevoJuego)
}

agregarJuego();*/

console.log(document.body)

let imprimirListaJuegos = document.getElementById("listaJuegos")

listadoCompleto.forEach(element => {

    let index = listadoCompleto.indexOf(element)
    imprimirListaJuegos.innerHTML += `
    <p class="text-light">
    <strong>Juego número ${index+1}: <strong>  ${element.nombre}
    </p>
    `
})