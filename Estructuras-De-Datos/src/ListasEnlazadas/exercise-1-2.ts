class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    head: LinkedListNode<T> | null;
    length: number;
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
}

const linkedList1 = new LinkedList();
linkedList1.add(5);
linkedList1.add(10);
console.log(linkedList1.size());
console.log(linkedList1.find(10));
