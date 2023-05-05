const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
const letters = ["a", "b", "c", ["d", "e"], "f"];

function flatten<Type>(array: (Type | Type[])[]): Type[] {
    const flattened = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            flattened.push(...element);
        } else {
            flattened.push(element);
        }
    }
    return flattened;
}

const flattenedNumbers = flatten(numbers);
const flattenedWords = flatten(letters);

console.log("[Ejercicio 2.3]", flattenedNumbers);
console.log(flattenedWords);
