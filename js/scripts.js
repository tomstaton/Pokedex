let pokemonRepository = (function () {
  let pokemonList = [
    { 
      number: 7,
      name: 'Squirtle',
      height: .5,
      weight: 9,
      types: ['Water']
    },
    {
      number: 8,
      name: 'Wartortle',
      height: 1,
      weight: 22.5,
      types: ['Water']
    },
    {
      number: 9,
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

  return {
    getAll: getAll,
    add: add,
  };
})();


pokemonRepository.getAll().forEach(function (pokemon) {

  let pList = document.querySelector('.pokeList');
  let listpokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = "placeholder";
  button.classList.add('pikaButton');
  listpokemon.appendChild(button);
  pList.appendChild(listpokemon);
  });