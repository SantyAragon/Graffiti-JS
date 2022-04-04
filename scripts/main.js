// 1- Que al hacer submit en el form se genere un div con clase "mensaje" y se anexe dentro de #wall

// 2- Si no existe, agregar un input de tipo texto al form y modificar el script para que ese texto se incluya en un párrafo adentro de cada nuevo .mensaje 
// 2.1- Evitar que el input quede vacío.

// 3- Si no existe, agregar un input de tipo color al form y modificar el script para que el texto del nuevo .mensaje sea del color seleccionado 

// 4- Agregar una X dentro de un span con clase "close" en cada .mensaje nuevo para agregar la funcionalidad de eliminar ese graffiti

// 5- Agregar un input de tipo checkbox al form y modificar el script para que el .mensaje tenga la clase .poster en lugar de .graffiti 

// BONUS- Al hacer submit, los inputs del formulario deben volver a los valores iniciales

const form = document.querySelector('form');
const isPoster = document.querySelector("#is-poster")

const renderDiv = (id) => {
    const contenedorDivs = document.querySelector(`${id}`)
    const contenidoDiv = document.getElementById("text-div")
    const colorDiv = document.getElementById("color-div")
    const colorPoster = document.getElementById("color-poster")
    const agregarSpan = document.createElement("span");

    let divNuevo = document.createElement("div")
    agregarSpan.innerText = "&times;"
    agregarSpan.className = "close"

    divNuevo.style.color = `${colorDiv.value}`
    divNuevo.className = "mensaje"
    isPoster.checked ? divNuevo.classList.add("poster") : divNuevo.classList.add("graffiti");
    isPoster.checked ? divNuevo.style.backgroundColor = `${colorPoster.value}` : "";
    divNuevo.innerHTML = `
    <span class="close">&times;</span>
    <p>${contenidoDiv.value} </p>
    `
    contenedorDivs.appendChild(divNuevo)
    form.reset();
}

const wall = document.querySelector("#wall")

wall.addEventListener("click", (evento) => evento.target.className === "close" ? wall.removeChild(evento.target.parentNode) : "")

function deleteAll() {
    wall.innerHTML = "";
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderDiv("#wall")
})