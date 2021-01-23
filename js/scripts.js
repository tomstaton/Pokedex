let pokemonRepository = (function () {
  let pokemonList = [
    { 
      name: 'Squirtle',
      height: .5,
      weight: 9,
      types: ['Water']
    },
    {
      name: 'Wartortle',
      height: 1,
      weight: 22.5,
      types: ['Water']
    },
    {
      name: 'Blastoise',
      height: 1.6,
      weight: 85.5,
      types: ['Water']
    }
  ];

  function getAll() {
    return pokemonList
    };

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem (pokemon) {
    let pList = document.querySelector(".pokeList");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-design");
    listpokemon.appendChild(button);
    pList.appendChild(listpokemon);
    button.addEventListener("click", function(event){
      showDetails(pokemon)
    })
  };
  
  function showDetails (pokemon) {
    console.log(pokemon)

  };
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);

});