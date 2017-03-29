var pokemons = [];

//Declaración de funciones para botones
function mainFunction(){
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");
  var pokemon = new Pokemon(nombrePokemon.value, colorPokemon.value, puntosAtaque.value);
  pokemons.push(pokemon);
  mostrarDropDown();
}

function mostrarDropDown(){
  var nombreSelect = document.getElementById("seccionPeleas");
  var elemento = document.createElement("option");

}

//función constructora de Pokemones
function Pokemon(nombre, color, puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  //this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque;
  };

  /*
  this.saludar = function(){
    console.log("Hola, me llamo " + this.nombre);
  };

  this.beber = function(tipoAlcohol){
    if (tipoAlcohol == "chelas") {
      this.nivelDeAmistad += 80;
    }
    else if (tipoAlcohol == "vodka") {
      this.nivelDeAmistad += 1;
    }
  };
  */

}
