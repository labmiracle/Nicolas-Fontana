let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

capitalize = function (value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};

multiply = function (x, y) {
    return x * y;
};

console.log("[Ejercicio 3.6]", capitalize(`habil ${multiply(5, 10)}`));
