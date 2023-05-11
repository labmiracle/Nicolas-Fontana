/*
  Ejercicio 2
    1. Vamos a implementar el juego de Code Breaker. El juego comienza generando un número
    al azar de cuatro dígitos. Cada dígito puede tener un valor entre 0 y 6.
    2. El usuario ingresa un número intentando adivina el número secreto
    3. Si alguno de los números concuerda en la posición original, se muestra una X
    4. Si alguno de los números no concuerda con la posición original, pero esta en el número
    secreto en otra posición, muestra un -
    5. El orden en que se muestran es el siguiente: XX- (primero las X y luego los -)
*/

function codeBreaker() {
    const getRandomDigit = (): string => Math.floor(Math.random() * 7).toString();

    const getRandomNumber = (): string[] => {
        const randomNumber = [];
        for (let i = 0; i < 4; i++) {
            randomNumber.push(getRandomDigit());
        }
        return randomNumber;
    };

    const getUserInput = (): string => {
        let userInput: string | null = prompt("Ingrese un número de 4 digitos [0 - 6]");
        while (userInput === null || userInput.length !== 4) {
            userInput = prompt("Error. Debe ingresar un número de 4 digitos [0 - 6]\nEjemplo: 0423");
        }
        return userInput;
    };

    const playGame = () => {
        let gameOver = false;
        const arrSecretNumber: string[] = getRandomNumber();
        let answer: string[] = [];
        alert(arrSecretNumber.join(""));
        while (!gameOver) {
            const input = getUserInput();
            if (input === arrSecretNumber.join("")) {
                gameOver = true;
                return alert("Adivinaste el número secreto!");
            }
            for (let i = 0; i < input.length; i++) {
                if (arrSecretNumber.includes(input[i]) && arrSecretNumber[i] === input[i]) {
                    answer.unshift("X");
                } else if (arrSecretNumber.includes(input[i])) {
                    answer.push("-");
                }
            }
            alert(answer.join(""));
            answer = [];
        }
    };
    playGame();
}

codeBreaker();
