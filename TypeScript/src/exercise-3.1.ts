function add(x: number, y: number | string): number {
    if (Number.isNaN(+y)) {
        return x;
    }
    return +x + +y;
}

function sumArray(numbers: (string | number)[]) {
    return numbers.reduce(add, 0);
}

const someSum = sumArray(["3", "6", "9"]);

console.log("[Ejercicio 3.1]", `3 + 6 + 9 === ${someSum}`);
