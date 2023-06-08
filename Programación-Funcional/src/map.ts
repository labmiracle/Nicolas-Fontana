import characters from "./characters";

const names: string[] = characters.map(character => character.name);

const heights: string[] = characters.map(character => character.height);

const namesAndHeights: { name: string; height: string }[] = characters.map(character => ({ name: character.name, height: character.height }));

console.log("Todos los nombres\n", names, "\n\n");
console.log("Todas las alturas\n", heights, "\n\n");
console.log("Objetos con las propiedades de nombre y altura\n", namesAndHeights);
