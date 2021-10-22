const filtrarPorNombre = (e) => {
    //Obtengo un nuevo array filtrado
    const filtro = lenguajes.filter(asd => asd.toLowerCase().includes(e.target.value.toLowerCase()));
    cargarElementos(filtro);
}

//Función para cargar todos los elementos en pantalla
const cargarElementos = (array) => {
    //capturo el contenedor
    const contenedor = document.getElementById('contenedor');
    //Pongo vacío el html del contenedor
    contenedor.innerHTML = '';
    //Cada producto del array filtrado lo imprimo en contenedor
    array.forEach(asd => {
        contenedor.innerHTML += `<p class="coincidencias">${asd}</p>`;
    });
}


//Imprimimos en pantalla todos los lenguajes al cargar la página
cargarElementos(lenguajes);


//=====================================================================\\
console.log("Registro de todos los formularios: ", document.forms);
console.log("Capturo el que voy a utilizar (y en este caso el único que hay)", document.forms.formularioBuscador);
//=====================================================================\\


//Detecta todo movimiento del input
document.forms.formularioBuscador.addEventListener("input", filtrarPorNombre);