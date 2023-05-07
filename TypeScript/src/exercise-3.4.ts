function greet(greeting: string = "hola"): string {
    return greeting.toUpperCase();
}

const defaultGreeting: string = greet();
const portugueseGreeting: string = greet("Oi como vai!");

console.log("[Ejercicio 3.4]", defaultGreeting, portugueseGreeting);
