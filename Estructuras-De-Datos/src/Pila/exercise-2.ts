import Pila from "./exercise-1";
function decimalToBinary(decimal: number): string {
    const pila = new Pila<number>();

    while (decimal > 0) {
        const remainder = decimal % 2;
        pila.push(remainder);
        decimal = Math.floor(decimal / 2);
    }

    let binary = "";
    while (pila.size() !== 0) {
        binary += pila.pop();
    }

    return binary;
}

const decimalNumber = 51;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(`El número decimal ${decimalNumber} en binario es: ${binaryNumber}`);
