import characters from "./characters";

const totalMass: number = characters.reduce((acc, character) => acc + +character.mass, 0);

const totalHeight: number = characters.reduce((acc, character) => acc + +character.height, 0);

const totalLettersOfCharacterNames: number = characters.reduce((acc, character) => acc + character.name.length, 0);

const totalLettersOfCharacterEyes: number = characters.reduce((acc, character) => acc + character.eye_color.length, 0);

console.log("Masa total de todos los personajes:", totalMass);
console.log("Altura total de todos los caracteres:", totalHeight);
console.log("Número total de caracteres en todos los nombres de los personajes:", totalLettersOfCharacterNames);
console.log("Número total de caracteres por color de ojos:", totalLettersOfCharacterEyes);
