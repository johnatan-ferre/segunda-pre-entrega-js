let verificoExistencia = false;

let btnBusqueda = document.getElementById('busqueda')

btnBusqueda.addEventListener("click", consultaLibro);

function consultaLibro() {
    const consulta = (document.getElementById("queryLibro").value).toLowerCase();
    let resultado = document.getElementById("res");
    let displayConsulta = document.getElementById("display-consulta");

    if (verificoExistencia == true) {
        resultado.remove(resultado);

        resultado = document.createElement("div");
        resultado.setAttribute("id", "res");
        resultado.setAttribute("class", "resultado");

        displayConsulta = document.createElement("div");
        displayConsulta.setAttribute("id", "display-consulta");

        resultado.appendChild(displayConsulta);

        document.getElementById("body").appendChild(resultado);
    }

    displayConsulta.innerHTML = `Resultados asociados a ${consulta}:`;

    const URL = "https://www.googleapis.com/books/v1/volumes?maxResults=40&q=" + consulta;

    const devuelveLibro = async () => {
        const resp = await fetch(URL)
        const {items} = await resp.json()

        items.forEach((libro) => {
            // console.log(libro.volumeInfo.title);
            // console.log(libro.volumeInfo.authors);
            // console.log(libro.volumeInfo.publishedDate);
            // console.log(libro.volumeInfo.imageLinks.thumbnail);

            try {
                var logo = libro.volumeInfo.imageLinks.thumbnail;
                }
                catch (error) {
                    var logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Georgia_404.svg/125px-Georgia_404.svg.png'
                }

            const card = document.createElement("div")
            card.innerHTML =
                `
                <h3> Título: ${libro.volumeInfo.title}</h3>
                <h4> Autor: ${libro.volumeInfo.authors}</h4>
                <p> Publicación: ${libro.volumeInfo.publishedDate}</p>
                `

            let info = (libro.volumeInfo.infoLink);
            const btn = document.createElement("a");
            btn.setAttribute("href", info);
            btn.innerHTML = "Ver más"

            const miniatura = document.createElement('img');
            miniatura.src = logo;

            card.appendChild(miniatura);
            card.appendChild(btn);
            resultado.appendChild(card);

        });
    }
    devuelveLibro();

    verificoExistencia = true;
    document.getElementById("queryLibro").value=''
}