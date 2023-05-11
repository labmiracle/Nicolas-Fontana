/*
  Ejercicio 1
    1. Armar una función que reciba dos cadenas. Una de las cadenas son joyas que representan
      los tipos de piedras preciosas que tenemos. La otra cadena reporesenta las piedras es un
      tipo que tenemos. Quieremos saber cuántas de las piedras son también joyas.
      console.assert(myFunction("aA", "aAAbbbb") === 3);
      console.assert(myFunction("z", "ZZ") === 0);
*/

function countJewels(jewels: string, stones: string): number {
    let acc = 0;
    const jewelSet: Set<string> = new Set(jewels);

    for (let i = 0; i < stones.length; i++) {
        if (jewelSet.has(stones[i])) {
            acc++;
        }
    }

    return acc;
}

console.assert(countJewels("aA", "aAAbbbb") === 3);
console.assert(countJewels("z", "ZZ") === 0);
