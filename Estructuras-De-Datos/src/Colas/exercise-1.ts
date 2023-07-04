class Queue<T> {
    private elements: T[];
    constructor() {
        this.elements = [];
    }

    enqueue(element: T): void {
        this.elements.push(element);
    }

    dequeue(): T | undefined {
        return this.elements.shift();
    }

    size(): number {
        return this.elements.length;
    }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(10);
console.log(queue);
queue.dequeue();
console.log(queue);
console.log(queue.size());
