// Ejercicio 1

const codificar = (texto: string, desplazamiento: number): string => {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const longitudAlfabeto = alfabeto.length;
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toUpperCase();
        if (alfabeto.includes(letra)) {
            let index = alfabeto.indexOf(letra) + desplazamiento;
            if (index < 0) {
                index = (index + longitudAlfabeto) % longitudAlfabeto;
            } else {
                index = index % longitudAlfabeto;
            }
            resultado += alfabeto[index];
        } else {
            resultado += letra;
        }
    }

    resultado = resultado.split("").reverse().join("");
    return resultado;
};

const decodificar = (texto: string, desplazamiento: number): string => {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const longitudAlfabeto = alfabeto.length;
    let resultado = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        const letra = texto[i].toUpperCase();
        if (alfabeto.includes(letra)) {
            let index = alfabeto.indexOf(letra) - desplazamiento;
            if (index < 0) {
                index = (index + longitudAlfabeto) % longitudAlfabeto;
            } else {
                index = index % longitudAlfabeto;
            }
            resultado += alfabeto[index];
        } else {
            resultado += letra;
        }
    }
    return resultado;
};

const frase = "Holabuenastardes";
const fraseCodificada: string = codificar(frase, -2);
console.log(fraseCodificada);
const fraseDecodificada = decodificar(fraseCodificada, -2);
console.log(fraseDecodificada);

// Ejercicio 2

const codificarInvertido = (texto: string, desplazamiento: number): string => {
    const textoInvertido = texto.split("").reverse().join("");
    return codificar(textoInvertido, desplazamiento);
};

const decodificarInvertido = (texto: string, desplazamiento: number): string => {
    const textoInvertido = decodificar(texto, desplazamiento);
    return textoInvertido.split("").reverse().join("");
};

const fraseCodificadaInvertida: string = codificarInvertido(frase, -2);
console.log(fraseCodificadaInvertida);

const fraseDecodificadaInvertida = decodificarInvertido(fraseCodificadaInvertida, -2);
console.log(fraseDecodificadaInvertida);
