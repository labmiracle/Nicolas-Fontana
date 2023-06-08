import characters from "./characters";

const atLeastOneMaleCharacter = characters.some(character => character.gender === "male");

const atLeastOneCharacterWithBlueEyes = characters.some(character => character.eye_color === "blue");

const atLeastOneCharacterTallerThan200 = characters.some(character => +character.height > 200);

const atLeastOneCharacterWithMassBelow50 = characters.some(character => +character.mass < 50);

console.assert(atLeastOneMaleCharacter === true);
console.assert(atLeastOneCharacterWithBlueEyes === true);
console.assert(atLeastOneCharacterTallerThan200 === true);
console.assert(atLeastOneCharacterWithMassBelow50 === true);
