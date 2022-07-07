let offset = 0;
let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}`;
const div = document.getElementById("root");
const button = document.getElementById("button");
// const buttonPrev = document.getElementById("button-prev");

// getPokemon(url);

// window.addEventListener("load", getPokemon);

button.addEventListener("click", () => {
    url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}`;
    offset += 20;

    getPokemon();

    div.innerHTML = "";
});

// buttonPrev.addEventListener("click", () => {
//     offset += 0;
//     url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}`;

//     getPokemon();
//     div.innerHTML = "";
// });

async function getPokemon() {
    const response = await fetch(url);
    const data = await response.json();

    showPokemon(data.results);
}

function showPokemon(data) {
    data.forEach(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();

        const pokeInfo = {
            nome: data.name,
            imagem: data.sprites.other["official-artwork"].front_default,
            tipos: data.types.map((type) => type.type.name),
            color: data.types.map((type) => type.type.name)[0],
        };

        // console.log(pokeInfo.tipos);

        // console.log(pokeInfo.tipos[0])

        div.innerHTML += `
            <div class="${pokeInfo.color}">
            <h2>${pokeInfo.nome}</h2>
            <img src="${pokeInfo.imagem}" />
            <p>Tipo: </p>
            <ol>
              <li>${pokeInfo.tipos.join("</li><li>")}</li>
            </ol>
            </div>
          `;
    });
}
