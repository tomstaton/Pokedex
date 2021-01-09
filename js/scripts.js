let pokemonList = [
  //{
  //  number: #,
  //  name: 'pokemon',
  //  height: #,
  //  weight: #,
  //  types: ['array of strings', '...']
//},
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
  },
  {
    number: 4,
    name: 'Charmander',
    height: .6,
    weight: 8.5,
    types: ['Fire']
  },
  {
    number: 5,
    name: 'Charmeleon',
    height: 1.1,
    weight: 19,
    types: ['Fire']
  },
  {
    number: 6,
    name: 'Charizard',
    height: 1.7,
    weight: 90.5,
    types: ['Fire', 'Flying']
  },
  {
    number: 1,
    name: 'Bulbasaur',
    height: .7,
    weight: 6.9,
    types: ['Grass', 'Poison']
  },
  {
    number: 2,
    name: 'Ivysaur',
    height: 1,
    weight: 13,
    types: ['Grass', 'Poison']
  },
  {
    number: 3,
    name: 'Venasaur',
    height: 2,
    weight: 100,
    types: ['Grass', 'Poison']
  },
  {
    number: 10,
    name: 'Caterpie',
    height: .3,
    weight: 2.9,
    types: ['Bug'],
  },
  {
    number: 11,
    name: 'Metapod',
    height: .7,
    weight: 9.9,
    types: ['Bug'],
  },
  {
    number: 12,
    name: 'Butterfree',
    height: 1.1,
    weight: 32,
    types: ['Bug', 'Flying'],
  },
  {
    number: 13,
    name: 'Weedle',
    height: .3,
    weight: 3.2,
    types: ['Bug', 'Poison'],
  },
  {
    number: 14,
    name: 'Kakuna',
    height: .6,
    weight: 10,
    types: ['Bug', 'Poison'],
  },
  {
    number: 15,
    name: 'Beedrill',
    height: 1,
    weight: 29.5,
    types: ['Bug', 'Poison'],
  },
  {
    number: 16,
    name: 'Pidgey',
    height: .3,
    weight: 1.8,
    types: ['Flying', 'Normal'],
  },
  {
    number: 17,
    name: 'Pidgeotto',
    height: 1.1,
    weight: 30,
    types: ['Flying', 'Normal'],
  },
  {
    number: 18,
    name: 'Pidgeot',
    height: 1.5,
    weight: 39.5,
    types: ['Flying', 'Normal'],
  },
  {
    number: 19,
    name: 'Spearow',
    height: .3,
    weight: 2,
    types: ['Flying', 'Normal'],
  },
  {
    number: 20,
    name: 'Fearow',
    height: 1.2,
    weight: 38,
    types: ['Flying', 'Normal'],
  },
  {
    number: 21,
    name: 'Rattata',
    height: .3,
    weight: 3.5,
    types: ['Normal'],
  },
  {
    number: 22,
    name: 'Raticate',
    height: .7,
    weight: 18.5,
    types: ['Normal'],
  },
  {
    number: 23,
    name: 'Ekans',
    height: 2,
    weight: 6.9,
    types: ['Poison'],
  },
  {
    number: 24,
    name: 'Arbok',
    height: 3.5,
    weight: 65,
    types: ['Poison'],
  },
  {
    number: 25,
    name: 'Pikachu',
    height: .4,
    weight: 6,
    types: ['Electric'],
  },
  {
    number: 26,
    name: 'Raichu',
    height: .8,
    weight: 30,
    types: ['Electric'],
  },
  {
    number: 27,
    name: 'Sandshrew',
    height: .6,
    weight: 12,
    types: ['Ground'],
  },
  {
    number: 28,
    name: 'Sandslash',
    height: 1,
    weight: 29.5,
    types: ['Ground'],
  },
  {
    number: 29,
    name: 'Nidoran "F" ',
    height: .4,
    weight: 7,
    types: ['Poison'],
  },
  {
    number: 30,
    name: 'Nidorina',
    height: .8,
    weight: 20,
    types: ['Poison'],
  },
  {
    number: 31,
    name: 'Nidoqueen',
    height: 1.3,
    weight: 60,
    types: ['Ground', 'Poison'],
  },
  {
    number: 32,
    name: 'Nidoran "M"',
    height: .5,
    weight: 9,
    types: ['Poison'],
  },
  {
    number: 33,
    name: 'Nidorino',
    height: .9,
    weight: 19.5,
    types: ['Poison'],
  },
  {
    number: 34,
    name: 'Nidoking',
    height: 1.4,
    weight: 62,
    types: ['Ground', 'Posion']
  },
  {
    number: 35,
    name: 'Clefairy',
    height: .6,
    weight: 7.5,
    types: ['Fairy']
  },
  {
    number: 36,
    name: 'Clefable',
    height: 1.3,
    weight: 40,
    types: ['Fairy']
  },
  {
    number: 37,
    name: 'Vulpix',
    height: .6,
    weight: 9.9,
    types: ['Fire']
  },
  {
    number: 38,
    name: 'Ninetails',
    height: 1.1,
    weight: 19.9,
    types: ['Fire']
  },
  {
    number: 39,
    name: 'Jigglypuff',
    height: .5,
    weight: 5.5,
    types: ['Fairy', 'Normal']
  },
  {
    number: 40,
    name: 'Wigglytuff',
    height: 1,
    weight: 12,
    types: ['Fairy', 'Normal']
  },
  {
    number: 41,
    name: 'Zubat',
    height: .8,
    weight: 7.5,
    types: ['Poison', 'Flying']
  },
  {
    number: 42,
    name: 'Golbat',
    height: 1.6,
    weight: 55,
    types: ['Poison', 'Flying']
  },
  {
    number: 43,
    name: 'Oddish',
    height: .5,
    weight: 5.4,
    types: ['Grass', 'Poison']
  },
  {
    number: 44,
    name: 'Gloom',
    height: .8,
    weight: 8.6,
    types: ['Grass', 'Poison']
  },
  {
    number: 45,
    name: 'Vileplume',
    height: 1.2,
    weight: 18.6,
    types: ['Grass', 'Poison']
  },
  {
    number: 46,
    name: 'Paras',
    height: .3,
    weight: 5.4,
    types: ['Grass', 'Bug']
  },
  {
    number: 47,
    name: 'Parasect',
    height: 1,
    weight: 29.5,
    types: ['Grass', 'Bug']
  },
  {
    number: 48,
    name: 'Venonat',
    height: 1,
    weight: 30,
    types: ['Bug', 'Poison']
  },
  {
    number: 49,
    name: 'Venomoth',
    height: 1.5,
    weight: 12.5,
    types: ['Bug', 'Poison']
  },
  {
    number: 50,
    name: 'Diglett',
    height: .2,
    weight: .8,
    types: ['Ground']
  },
  {
    number: 51,
    name: 'Dugtrio',
    height: .7,
    weight: 33.3,
    types: ['Ground']
  },
  {
    number: 52,
    name: 'Meowth',
    height: .4,
    weight: 4.2,
    types: ['Normal']
  },
  {
    number: 53,
    name: 'Persian',
    height: 1,
    weight: 32,
    types: ['Normal']
  },
  {
    number: 54,
    name: 'Psyduck',
    height: .8,
    weight: 19.6,
    types: ['Water']
  },
  {
    number: 55,
    name: 'Golduck',
    height: 1.7,
    weight: 76.6,
    types: ['Water']
  },
  {
    number: 56,
    name: 'Mankey',
    height: .5,
    weight: 28,
    types: ['Fighting']
  },
  {
    number: 57,
    name: 'Primeape',
    height: 1,
    weight: 32,
    types: ['Fighting']
  },
  {
    number: 58,
    name: 'Growlithe',
    height: .7,
    weight: 19,
    types: ['Fire']
  },
  {
    number: 59,
    name: 'Arcanine',
    height: 1.9,
    weight: 155,
    types: ['Fire']
  },
  {
    number: 60,
    name: 'Poliwag',
    height: .6,
    weight: 12.4,
    types: ['Water']
  },
  {
    number: 61,
    name: 'Poliwhirl',
    height: 1,
    weight: 20,
    types: ['Water']
  },
  {
    number: 62,
    name: 'Poliwrath',
    height: 1.3,
    weight: 54,
    types: ['Water', 'Fighting']
  },
  {
    number: 63,
    name: 'Abra',
    height: .9,
    weight: 19.5,
    types: ['Pyschic']
  },
  {
    number: 64,
    name: 'Kadabra',
    height: 1.3,
    weight: 56.5,
    types: ['Psychic']
  },
  {
    number: 65,
    name: 'Alakazam',
    height: 1.5,
    weight: 48,
    types: ['Pyschic']
  },
  {
    number: 66,
    name: 'Machop',
    height: .8,
    weight: 19.5,
    types: ['Fighting']
  },
  {
    number: 67,
    name: 'Machoke',
    height: 1.5,
    weight: 70.5,
    types: ['Fighting']
  },
  {
    number: 68,
    name: 'Machamp',
    height: 1.6,
    weight: 130,
    types: ['Fighting']
  },
  {
    number: 69,
    name: 'Bellsprout',
    height: .7,
    weight: 4,
    types: ['Grass', 'Poison']
  },
  {
    number: 70,
    name: 'Weepinbell',
    height: 1,
    weight: 6.4,
    types: ['Grass', 'Poison']
  },
  {
    number: 71,
    name: 'Victreebel',
    height: 1.7,
    weight: 15.5,
    types: ['Grass', 'Poison']
  }
]
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >=1.5){
    document.write("<p>" + pokemonList[i].name + " - Height: " + pokemonList[i].height + " Wow!");
  }else {
    document.write("<p>" + pokemonList[i].name + " - Height: " + pokemonList[i].height)}
}