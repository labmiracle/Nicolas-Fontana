import { LinkedListNode, LinkedList } from "./exercise-1-2";

class DoublyLinkedListNode<T> extends LinkedListNode<T> {
    public next: DoublyLinkedListNode<T> | null;
    public previous: DoublyLinkedListNode<T> | null;
    constructor(value: T) {
        super(value);
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList<T> extends LinkedList<T> {
    public head: DoublyLinkedListNode<T> | null;
    constructor() {
        super();
        this.head = null;
    }

    add(value: T): void {
        const newNode = new DoublyLinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.previous = currentNode;
        }
        this.length++;
    }

    remove(value: T): void {
        let current: DoublyLinkedListNode<T> | null = this.head;
        while (current) {
            if (current.value === value) {
                if (current === this.head && current.next) {
                    this.head = current.next;
                    this.head.previous = null;
                } else if (current === this.head) {
                    this.head = null;
                } else if (current.next && current.previous) {
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                } else {
                    if (current.previous) {
                        current.previous.next = null;
                    }
                }
                this.length--;
                break;
            }
            current = current.next;
        }
    }

    invert() {
        if (!this.head || !this.head.next) {
            return;
        }
        let current: DoublyLinkedListNode<T> | null = this.head;
        while (current) {
            const nextNode: DoublyLinkedListNode<T> | null = current.next;
            current.next = current.previous;
            current.previous = nextNode;
            if (!nextNode) {
                this.head = current;
            }
            current = nextNode;
        }
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(4);
doublyLinkedList.add(5);
doublyLinkedList.add(5);
doublyLinkedList.add(6);
doublyLinkedList.remove(5);
doublyLinkedList.invert();
console.log("Lista doblemente enlazada: ", doublyLinkedList.toArray());
