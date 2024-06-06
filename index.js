import analyzer from "./analyzer.js";
//VARIABLES
const userImput = document.querySelector('[name="user-input"]');

const caracteres = document.querySelector('[data-testid="character-count"]');
const palabras = document.querySelector('[data-testid="word-count"]');
const numeros = document.querySelector('[data-testid="number-count"]');
const caracteresSinEspacios = document.querySelector(
  '[data-testid="character-no-spaces-count"]'
);
const sumaDeNumeros = document.querySelector('[data-testid="number-sum"]');
const promedioLongitud = document.querySelector(
  '[data-testid="word-length-average"]'
);
const btnReset = document.getElementById("reset-button");

//FUNCION DEL BOTON
btnReset.addEventListener("click", function () {
  userImput.value = "";
  palabras.innerHTML = "Palabras: ";
  caracteres.innerHTML = "Caracteres: ";
  numeros.innerHTML = "Números: ";
  caracteresSinEspacios.innerHTML = "Caracteres Sin Espacios: ";
  sumaDeNumeros.innerHTML = "Suma de Números: ";
  promedioLongitud.innerHTML = "Promedio Longitud: ";
});

/*en lugar de limpiar caja function () {
  userImput.value = "";
}*/

//CAMBIANDO EL TEXTO
userImput.addEventListener("input", function () {
  //console.log(userImput.value);
  //console.log(analyzer.getWordCount(userImput.value))
  palabras.innerHTML = "Palabras: " + analyzer.getWordCount(userImput.value);
  caracteres.innerHTML =
    "Caracteres: " + analyzer.getCharacterCount(userImput.value);
  numeros.innerHTML = "Números: " + analyzer.getNumberCount(userImput.value);
  caracteresSinEspacios.innerHTML =
    "Caracteres Sin Espacios: " +
    analyzer.getCharacterCountExcludingSpaces(userImput.value);
  sumaDeNumeros.innerHTML =
    "Suma de Números: " + analyzer.getNumberSum(userImput.value);
  promedioLongitud.innerHTML =
    "Promedio Longitud: " + analyzer.getAverageWordLength(userImput.value);
});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
