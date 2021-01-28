let pokemonRepository = (function () {
  let modalContainer = document.querySelector("#modal-container");
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let pList = document.querySelector(".pokeList"); //selectxs the pokeList class
    //unordered list from index.html
    let listpokemon = document.createElement("li"); //creates item in a list
    let button = document.createElement("button"); //creates a button
    button.innerText = pokemon.name; //assigns text to the generated button
    button.classList.add("button-design"); //gives the button a class for reference from CSS
    listpokemon.appendChild(button); //adds child element - button - to the already created button
    pList.appendChild(listpokemon); //creates item in a list
    button.addEventListener("click", function (event) {
      showDetails(pokemon); //the button will perform the showModal function when it is clicked
    });
  }
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalContainer = document.querySelector('#modal-container');
  
    // Clear all existing modal content
    modalContainer.innerHTML = '';
  
    let modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener("click", hideModal);    

    let pokemonName = document.createElement('h1');
    pokemonName.innerText = pokemon.name;

    let pokemonImage = document.createElement("img");
    pokemonImage.classList.add("modal-img");
    pokemonImage.setAttribute("src", pokemon.imageUrl);

    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = "Height: " + pokemon.height;
  
    let pokemonTypes = document.createElement('p');
    pokemonTypes.innerText = "Types: " + pokemon.types;

    let pokemonAbilities = document.createElement('p');
    pokemonAbilities.innerText = "Abilities: " + pokemon.abilities;

    modal.appendChild(closeButtonElement);
    modal.appendChild(pokemonName);
    modal.appendChild(pokemonImage);
    modal.appendChild(pokemonHeight);
    modal.appendChild(pokemonTypes);
    modal.appendChild(pokemonAbilities);
    modalContainer.appendChild(modal);
  
    modalContainer.classList.add('is-visible');
  }
  
  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });

  modalContainer.addEventListener("click", (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });
  function hideModal() {
    modalContainer.classList.remove("is-visible");
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        //result if there is an error
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        //add the details to the item
        item.imageUrl = details.sprites.other.dream_world.front_default;
        item.height = details.height;
        item.types = [];
        details.types.forEach(function (pokemonType) {
          item.types.push(pokemonType.type.name);
        });
        item.abilities = [];
        details.abilities.forEach(function (pokemonAbility) {
          item.abilities.push(pokemonAbility.ability.name);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    showModal: showModal,
    loadDetails: loadDetails,
    hideModal: hideModal,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
