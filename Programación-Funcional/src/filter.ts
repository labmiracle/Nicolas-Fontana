import characters from "./characters";

const charactersWithMassAbove100 = characters.filter(character => +character.mass > 100);

const charactersWithHeightBelow200 = characters.filter(character => +character.height < 200);

const maleCharacters = characters.filter(character => character.gender === "male");

const femaleCharacters = characters.filter(character => character.gender === "female");

console.log("Personajes con masa superior a 100\n", charactersWithMassAbove100, "\n\n");
console.log("Personajes con una altura inferior a 200\n", charactersWithHeightBelow200, "\n\n");
console.log("Todos los personajes masculinos\n", maleCharacters, "\n\n");
console.log("Todos los personajes femeninos\n", femaleCharacters);
