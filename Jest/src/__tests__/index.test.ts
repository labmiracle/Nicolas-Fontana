import fizzBuzz from "../exercise-1.1";
import isLeapYear from "../exercise-1.2";
import adnCleaner from "../exercise-1.3";
import addPositiveNumbers from "../exercise-1.4";
import firstCharacterRepeatedConsecutively from "../exercise-1.5";

describe("FizzBuzz test", () => {
    test("Número divisible por 3", () => {
        expect(fizzBuzz(6)).toBe("Fizz");
    });
    test("Número divisble por 5", () => {
        expect(fizzBuzz(10)).toBe("Buzz");
    });
    test("Número divisble por 3 y 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    test("Número = 0", () => {
        expect(fizzBuzz(0)).toBe(0);
    });
    test("Número no divisible por 3 o 5", () => {
        expect(fizzBuzz(7)).toBe(7);
    });
    test("Recibe un string", () => {
        // @ts-expect-error testeando un argumento inválido
        expect(() => fizzBuzz("a")).toThrow("Must be a number");
    });
});

describe("Año bisiesto test", () => {
    test("Divisible por 4 y no divisible por 100", () => {
        expect(isLeapYear(2004)).toBeTruthy;
    });
    test("Divisible por 400", () => {
        expect(isLeapYear(2000)).toBeTruthy;
    });
    test("Divisible por 4 y 100 pero no por 400", () => {
        expect(isLeapYear(2100)).toBeFalsy;
    });
    test("No es divisible por 4", () => {
        expect(isLeapYear(2003)).toBeFalsy;
    });
    test("Recibe un string", () => {
        // @ts-expect-error testeando un argumento inválido
        expect(() => isLeapYear("a")).toThrow("Must be a number");
    });
});

describe("ADN test", () => {
    test("El argumento es una cadena vacía", () => {
        expect(adnCleaner("")).toBe("");
    });
    test("El argumento es una cadena canónica", () => {
        expect(adnCleaner("CTAGGGTA")).toBe("CTAGGGTA");
    });
    test("El argumento no es una cadena canónica con minúsculas", () => {
        expect(adnCleaner("CcTAGGasdGTAe")).toBe("CTAGGGTA");
    });
    test("El argumento no contiene valores base canónicos", () => {
        expect(adnCleaner("XBNFLH")).toBe("");
    });
    test("El argumento no es una cadena", () => {
        // @ts-expect-error testeando un argumento inválido
        expect(() => adnCleaner(123)).toThrow("Must be a string");
    });
});

describe("Sumar números positivos del arreglo test", () => {
    test("El argumento contiene solo números positivos", () => {
        expect(addPositiveNumbers([1, 2, 3])).toBe(6);
    });
    test("El argumento contiene solo números positivos y cadenas", () => {
        expect(addPositiveNumbers([1, 2, 3, "2", "a"])).toBe(8);
    });
    test("El argumento esta vacío", () => {
        expect(addPositiveNumbers([])).toBe(0);
    });
    test("El argumento contiene numeros positivos y negativos", () => {
        expect(addPositiveNumbers([1, 2, 3, -3, -1])).toBe(6);
    });
});

describe("Primer letra repetida consecutivamente test", () => {
    test("El argumento no contiene un caracter que se repita consecutivamente", () => {
        expect(firstCharacterRepeatedConsecutively("Hola, cómo va?")).toBe(-1);
    });
    test("El argumento contiene un caracter que se repita consecutivamente", () => {
        expect(firstCharacterRepeatedConsecutively("Hoola, cómo va?")).toBe(2);
    });
    test("El argumento contiene dos caracter que se repita consecutivamente", () => {
        expect(firstCharacterRepeatedConsecutively("Hoolaa, cómo va?")).toBe(2);
    });
    test("La función no distingue entre mayúsculas y minúsculas", () => {
        expect(firstCharacterRepeatedConsecutively("HoOla, cómo va?")).toBe(2);
    });
    test("El argumento no es una cadena", () => {
        // @ts-expect-error testeando un argumento inválido
        expect(() => firstCharacterRepeatedConsecutively(123)).toThrow("Must be a string");
    });
});
