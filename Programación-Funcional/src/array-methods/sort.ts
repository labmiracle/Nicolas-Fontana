import characters from "./characters";

const sortedByName = characters.slice().sort((a, b) => a.name.localeCompare(b.name));

const sortedByMass = characters.slice().sort((a, b) => +a.mass - +b.mass);

const sortedByHeight = characters.slice().sort((a, b) => +a.height - +b.height);

const sortedByGender = characters.slice().sort((a, b) => a.gender.localeCompare(b.gender));

console.log("Ordenado por nombre\n", sortedByName, "\n\n");
console.log("Ordenado por masa\n", sortedByMass, "\n\n");
console.log("Ordenado por altura\n", sortedByHeight, "\n\n");
console.log("Ordenado por género\n", sortedByGender);
