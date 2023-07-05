class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T> {
    root: TreeNode<T> | null;
    constructor() {
        this.root = null;
    }

    insert(value: T) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    /*
    inOrder(): T[] | undefined {
        if (!this.root) {
            return;
        }

        const stack = [];
        const nodeValuesInOrder: T[] = [];
        let current: TreeNode<T> | null | undefined = this.root;

        while (current || stack.length > 0) {
            while (current) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();
            if (current) {
                nodeValuesInOrder.push(current?.value);
            }
            current = current?.right;
        }
        return nodeValuesInOrder;
    }

    inPreviousOrder(): T[] | undefined {
        if (!this.root) {
            return;
        }

        const stack = [];
        const nodeValuesInOrder: T[] = [];
        let current: TreeNode<T> | null | undefined = this.root;
        while (current || stack.length > 0) {
            if (current) {
                stack.push(current);
                nodeValuesInOrder.push(current.value);
            }
            if (current?.left) {
                current = current.left;
            } else {
                current = stack.pop();
                current = current?.right;
            }
        }
        return nodeValuesInOrder;
    }
    */

    // Más sencillo resolverlo con recursividad

    inOrder(): T[] {
        const nodeValuesInOrder: T[] = [];

        const sortValues = (node: TreeNode<T> | null) => {
            if (node === null) {
                return;
            }

            sortValues(node.left);
            nodeValuesInOrder.push(node.value);
            sortValues(node.right);
        };

        sortValues(this.root);
        return nodeValuesInOrder;
    }

    inPreviousOrder(): T[] {
        const nodeValuesInOrder: T[] = [];

        const sortValues = (node: TreeNode<T> | null) => {
            if (node === null) {
                return;
            }

            nodeValuesInOrder.push(node.value);
            sortValues(node.left);
            sortValues(node.right);
        };

        sortValues(this.root);
        return nodeValuesInOrder;
    }

    inLaterOrder(): T[] {
        const nodeValuesInOrder: T[] = [];

        const sortValues = (node: TreeNode<T> | null) => {
            if (node === null) {
                return;
            }

            sortValues(node.left);
            sortValues(node.right);
            nodeValuesInOrder.push(node.value);
        };

        sortValues(this.root);
        return nodeValuesInOrder;
    }

    size(): number {
        let count = 0;
        const traverseNodes = (node: TreeNode<T> | null) => {
            if (node === null) {
                return;
            }
            traverseNodes(node.left);
            count++;
            traverseNodes(node.right);
        };
        traverseNodes(this.root);
        return count;
    }

    findMinMaxValues(): { minValue: number; maxValue: number } | undefined {
        let minValue: T | null = null;
        let maxValue: T | null = null;

        const traverseNodes = (node: TreeNode<T> | null) => {
            if (node === null) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            if (minValue === null || node.value < minValue!) {
                minValue = node.value;
            }

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            if (maxValue === null || node.value > maxValue!) {
                maxValue = node.value;
            }

            traverseNodes(node.left);
            traverseNodes(node.right);
        };

        traverseNodes(this.root);

        if (minValue === null || maxValue === null) {
            return;
        }

        return { minValue, maxValue };
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(3);
binaryTree.insert(2);
binaryTree.insert(2);
binaryTree.insert(1);
binaryTree.insert(4);
binaryTree.insert(5);
console.log("In order: ", binaryTree.inOrder());
console.log("In previous order: ", binaryTree.inPreviousOrder());
console.log("In later order: ", binaryTree.inLaterOrder());
console.log("Cantidad de elementos en el árbol: ", binaryTree.size());
console.log("Valor mínimo y máximo: ", binaryTree.findMinMaxValues());

/*
       3
      / \
     2   4
    /\    \
   1  2     5

   In order: [1,2,2,3,4,5]
   In previous order: [3,2,1,2,4,5]
   In later order: [1,2,2,5,4,3]
*/
