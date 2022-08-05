//array para armazenar as imagens
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// pegar imagem externa
async function getExternalImage() {
    const response = await fetch("https://source.unsplash.com/random");

    console.log(response);

    document.querySelector(".image").innerHTML = `<img src="${response.url}">`;
}

getExternalImage();

//clicar no botão, pegar imagem externa
document.querySelector("button").onclick = function () {
    getExternalImage();
};

//salvar no local storage ou remover
document.querySelector(".image").onclick = function () {
    const imageContainer = document.querySelector(".image");
    const imageSource = document.querySelector(".image img").src;
    //se está no localStorage, remover
    const index = favorites.indexOf(imageSource);
    const existsInLocalStorage = index != -1;
    if (existsInLocalStorage) {
        favorites.splice(index, 1);
        imageContainer.classList.remove("fav");
    } else {
        //salvar no localStorage
        favorites.push(imageSource);
        imageContainer.classList.add("fav");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

//salvar no local storage ou remover
