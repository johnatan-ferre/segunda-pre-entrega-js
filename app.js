let coleccionLibros = new Array();
const claveLocal = "coleccionLibros";

//Cargo desde local storage, en el caso de que tenga algo
cargarLibros();

//Escucho cuando el usuario presione el botón para agregar un nuevo libro a la lista
let btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener("click", () => {
    if (validForm()) {
        createLibro();
    } else {
        alert("Ingrese de forma correcta los datos solicitados");
    }
})

//Validar formulario
function validForm() {

    let inputTitle = document.getElementById("title").value;
    let inputAuthor = document.getElementById("author").value;
    let inputYear = document.getElementById("year").value;
    let inputGenre = document.getElementById("genre").value;
    let inputTheme = document.getElementById("theme").value;
    let inputCover = document.getElementById("cover").value;

    if (!inputTitle) {
        alert("Ingrese el título");
        return false;
    }

    if (!inputAuthor) {
        alert("Ingrese el autor");
        return false;
    }

    if (!inputYear) {
        alert("Ingrese el año de publicación");
        return false;
    }

    if (!inputGenre) {
        alert("Ingrese el género");
        return false;
    }

    if (!inputTheme) {
        alert("Ingrese la temática");
        return false;
    }

    if (!inputCover) {
        alert("Ingrese la ruta de la portada");
        return false;
    }

    return true;
}

//Crear libro
function createLibro() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;
    let theme = document.getElementById("theme").value;
    let cover = document.getElementById("cover").value;


    //Creo libro, pusheo al array originalmente vacío y después guardo en el local storage
    let libro = new Libro(title, author, year, genre, theme, cover);
    coleccionLibros.push(libro);
    localStorage.setItem(claveLocal, JSON.stringify(coleccionLibros));

    createCardLibro(title, author, cover);
}

//Interacción con el DOM para crear nuevos elementos
function createCardLibro(title, author, cover) {
    let newDiv = document.createElement("div");
    let newH3 = document.createElement("h3");
    let newH4 = document.createElement("h4");
    let newImg = document.createElement("img");

    newDiv.id = "div" + title + author + cover;
    newH3.textContent = title;
    newH4.textContent = author;
    newImg.src = cover;

    newDiv.appendChild(newH3);
    newDiv.appendChild(newH4);
    newDiv.appendChild(newImg);

    let container = document.getElementById("libroContainer");
    container.appendChild(newDiv);

    resetForm();
}

//Reset formulario
function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("theme").value = "";
    document.getElementById("cover").value = "";
}

//Cargar información desde local storage
function cargarLibros() {
    let memoriaLocal = localStorage.getItem(claveLocal);
    if (memoriaLocal) {
        memoriaLocal = JSON.parse(memoriaLocal);
        coleccionLibros = memoriaLocal;

        for (let i = 0; i < memoriaLocal.length; i++) {
            let libro = memoriaLocal[i];
            console.log(libro.title);
            console.log(libro.author);
            console.log(libro.cover);
            createCardLibro(libro.title, libro.author, libro.cover);
        }

    }
}