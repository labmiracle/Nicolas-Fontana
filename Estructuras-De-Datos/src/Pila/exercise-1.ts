export default class Pila<T> {
    private items: T[];
    constructor() {
        this.items = [];
    }
    push(item: T): void {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
    size(): number {
        return this.items.length;
    }
}

const pila = new Pila();
pila.push(1);
pila.push(2);
pila.pop();
console.log(pila.size());
