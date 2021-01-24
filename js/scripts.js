let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  function getAll() {
    return pokemonList
    };

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem (pokemon) {
    let pList = document.querySelector(".pokeList");//selects the pokeList class unordered list from index.html
    let listpokemon = document.createElement("li");//creates item in a list
    let button = document.createElement("button");//creates a button
    button.innerText = pokemon.name;//assigns text to the generated button
    button.classList.add("button-design");//gives the button a class for reference from CSS
    listpokemon.appendChild(button);//adds child element - button - to the already created button
    pList.appendChild(listpokemon);//creates item in a list
    button.addEventListener("click", function(event){
      showDetails(pokemon)//the button will perform the showDetails function when it is clicked
    })
  };
  
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    })
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = []
      details.types.forEach(function(pokemonType){
        item.types.push(pokemonType.type.name)
      })
      item.abilities = []
      details.abilities.forEach(function(pokemonAbility){
        item.abilities.push(pokemonAbility.ability.name)
      })
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});