import characters from "./characters";

const allCharactersHaveBlueEyes = characters.every(character => character.eye_color === "blue");

const allCharactersHaveMassAbove40 = characters.every(character => +character.mass > 40);

const allCharactersAreShorterThan200 = characters.every(character => +character.height < 200);

const allCharactersAreMale = characters.every(character => character.gender === "male");

console.assert(allCharactersHaveBlueEyes === false);
console.assert(allCharactersHaveMassAbove40 === true);
console.assert(allCharactersAreShorterThan200 === false);
console.assert(allCharactersAreMale === false);
