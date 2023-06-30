class LinkedListNode<T> {
    public value: T;
    public next: LinkedListNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    protected head: LinkedListNode<T> | null;
    protected length: number;
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value: T): void {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length++;
    }

    remove(value: T): void {
        let current: LinkedListNode<T> | null = this.head;
        if (!current) {
            return;
        }
        let previous;
        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }
        if (!current) {
            return;
        }
        if (!previous) {
            this.head = current.next;
        } else {
            previous.next = current.next;
        }
        this.length--;
    }

    size(): number {
        return this.length;
    }

    find(value: T): boolean {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    invert() {
        if (!this.head || !this.head.next) {
            return;
        }
        let next: LinkedListNode<T> | null;
        let previous: LinkedListNode<T> | null = null;
        let current: LinkedListNode<T> | null = this.head;
        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }

    toArray() {
        let current = this.head;
        const arr = [];
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

    deleteDups() {
        let current: LinkedListNode<T> | null = this.head;
        let previous: LinkedListNode<T> | null = null;
        if (!current) return;
        const visitedValues = new Set<T>();
        while (current) {
            if (visitedValues.has(current.value)) {
                if (previous) {
                    previous.next = current.next;
                }
                this.length--;
            } else {
                visitedValues.add(current.value);
                previous = current;
            }
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.add(5);
list.add(10);
list.add(15);
list.add(11);
list.add(15);
list.add(15);
console.log(list.size());
console.log(list.find(10));
console.log(list.remove(11));
list.invert();
list.deleteDups();
console.log("Lista simplemente enlazada: ", list.toArray());

export { LinkedListNode, LinkedList };
