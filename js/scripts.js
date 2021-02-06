let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pList = document.querySelector(".pokeList"); //selects the pokeList class
    //unordered list from index.html
    let listpokemon = document.createElement("li"); //creates item in a list
    let button = document.createElement("button"); //creates a button
    button.innerText = pokemon.name; //assigns text to the generated button
    button.classList.add("button-design", "btn-primary", "group-list-item"); //gives the button a class for reference from CSS
    pList.appendChild(listpokemon); //creates item in a list
    listpokemon.appendChild(button); //adds child element - button - to the already created button
    button.addEventListener("click", function (event) {
      showDetails(pokemon); //the button will perform the showModal function when it is clicked
    });
  }     

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon)
      $('#modal-container').modal("show")
    });
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
        details.types.forEach(function (itemType) {
          item.types.push(itemType.type.name);
        });
        item.abilities = [];
        details.abilities.forEach(function (itemAbilities) {
          item.abilities.push(itemAbilities.ability.name);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showModal(item) {
    let modalContainer = $("#modal-container");
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();
  
    modalContainer.innerHTML = '';

    let nameElement = $("<h1>" + item.name + "</h1>")

    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", item.imageUrl);

    let heightElement = $("<p>" + "Height: " + item.height + "</p>")

    let typesElement = $("<p>" + "Types: " + item.types.join(', ') + "</p>");
      if (item.types.length === 1){
        typesElement = $("<p>" + "Type: " + item.types + "</p>")
      }

    let abilitiesElement = $("<p>" + "Abilities: " + item.abilities.join(', ') + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
  }
      
  function hideModal() {
  let closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("modal-close");
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener("click", hideModal);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    showModal: showModal,
    hideModal: hideModal,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
 });
})