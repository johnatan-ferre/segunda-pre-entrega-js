const pedido = async () => {
    const resp = await
    fetch('./data.json')
    const data = await resp.json()

    data.forEach(libro => {
        const lista = document.createElement("div");
        lista.innerHTML = `
                        <h2>${libro.title}</h2>
                        <div>
                            <img src=${libro.cover}></div>
                        <p>${libro.author}</p>
                        <p>Año de publicación: ${libro.year}</p>`
        document.body.appendChild(lista);
    });
}
pedido()