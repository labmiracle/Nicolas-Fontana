import Pila from "./exercise-1";

function decimalToBase(decimal: number, base: number): string {
    if (base < 2 || base > 36) {
        throw new Error("The base must be between 2 and 36.");
    }
    const pila = new Pila<string>();
    const digitos = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    while (decimal > 0) {
        const remainder = decimal % base;
        pila.push(digitos[remainder]);
        decimal = Math.floor(decimal / base);
    }

    let result = "";
    while (pila.size() !== 0) {
        result += pila.pop();
    }

    return result;
}

const decimalNumber = 59;
const baseNumber = 16;
const convertedNumber = decimalToBase(decimalNumber, baseNumber);
console.log(`El número decimal ${decimalNumber} en base ${baseNumber} es: ${convertedNumber}`);
