const inputField = document.getElementById('pokeInput');
const form = document.getElementById('pokeForm');

let formSubmit = async (event) => {
    event.preventDefault();
    let name = inputField.value;
    const api = `https://pokeapi.co/api/v2/pokemon/${name}`

    fetch(api)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            document.getElementById('name').innerHTML= `${data.forms[0].name.toUpperCase()}!`;
            // document.getElementById('image').innerHTML= data.sprites.front_default;
            document.getElementById('ability1').innerHTML = `${data.abilities[0].ability.name.toUpperCase()}!`;
            document.getElementById('ability2').innerHTML = `${data.abilities[1].ability.name.toUpperCase()}!`;
            iconImg.src = data.sprites.other.home.front_default;

})

}
form.addEventListener('submit', formSubmit);


