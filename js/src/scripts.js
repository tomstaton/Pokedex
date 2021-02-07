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
    var $listItem = $('<li class="list-group-item"></li>');
    var $ul = $(".pokeList");
    var $button = $(
      '<button type="button" class="button-design btn-primary group-list-item" data-toggle="modal" data-target="#modal-container">' +
        pokemon.name +
        "</button>"
    );
    $ul.append($listItem);
    $listItem.append($button);

    $button.on("click", function () {
      showDetails(pokemon);
    });
  }

  function showDetails(item) {
    $(".modal").innerHTML = "";
    $(document).on("click", ".group-list-item", function () {
      var $nameElement = $("<h5>" + item.name + "</h5>");
      var $heightElement = $("<p>" + "Height: " + item.height + "</p>");
      var $imageElement = $(
        '<img src="' + item.imageUrl + '"alt=' + item.name + ">"
      );
      let $typesElement = $("<p>" + "Types: " + item.types.join(", ") + "</p>");
      if (item.types.length === 1) {
        typesElement = $("<p>" + "Type: " + item.types + "</p>");
      }

      let $abilitiesElement = $(
        "<p>" + "Abilities: " + item.abilities.join(", ") + "</p>"
      );
      $(".modal-header").html($nameElement);
      $(".modal-body").html($imageElement);
      $(".modal-body").append($heightElement);
      $(".modal-body").append($typesElement);
      $(".modal-body").append($abilitiesElement);
      $("#modal").modal("show");
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
            detailsUrl: item.url
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

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    pokemonRepository.loadDetails(pokemon);
  });
});
