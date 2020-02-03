const {Stack} = require("./stack")
class BST {
    constructor(node) {
        this.root = node;
    }

    insert(parent, node) {
        if (parent.key <= node.key) {
            if (parent.right != null) {
                this.insert(parent.right, node)
            } else {
                node.parent = parent;
                parent.right = node;
            }
        } else {
            if (parent.left != null) {
                this.insert(parent.left, node);
            } else {
                node.parent = parent;
                parent.left = node;
            }
        }
    }

    insertIterative(x) {
        let parent = null;
        let node = this.root;
        while (node != null) {
            parent = node;
            if (x.key >= node.key) {
                node = node.right;
            } else {
                node = node.left;
            }
        }

        x.parent = parent;
        if (parent == null) {
            this.root = x;
        } else {
            if (x.key >= parent.key) {
                parent.right = x;
            } else {
                parent.left = x;
            }
        }
    }

    printInOrder(parent){
        if (parent.left != null) {
            this.printInOrder(parent.left);
        }
        console.log(parent);
        if (parent.right != null) {
            this.printInOrder(parent.right)
        }
    }

    printInOrderIterative() {

        const stack = new Stack();
        let node = this.root;
        while(true) {
            if (node != null) {
                stack.push(node);
                node = node.left;
            }
            if (node == null && stack.size > 0) {
                let elem = stack.pop();
                console.log("***")
                console.log(elem);
                console.log("***")

                node = elem.right;
            }
            if (node == null && stack.size === 0) {
                return
            }
        }
    }

    search(node, value) {
        if (node == null || node.key === value) {
            return node;
        }
        if (value >= node.key) {
            return this.search(node.right, value);
        } else {
            return this.search(node.left, value);
        }
    }

    getMin(node) {
        if (node.left) {
            return this.getMin(node.left);
        } else {
            return node;
        }
    }

    getMax(node) {
        if (node.right) {
            return this.getMax(node.right)
        }
        return node;
    }

    getSuccessor(node) {
        if (node.right) {
            return this.getMin(node.right);
        } else {
            while (node.parent != null && node.parent.right === node) {
                node = node.parent;
            }
            return node.parent;
        }
    }

    getPredecessor(node) {
        if (node.left) {
            return this.getMax(node.left)
        } else {
            while(node.parent != null && node.parent.left === node) {
                node = node.parent
            }
            return node.parent
        }
    }

    delete(node) {
        let y;
        if (node.left == null || node.right == null) {
            y = node;
        } else {
            y = this.getSuccessor(node);
        }

        let x;
        if (y.left != null) {
           x = y.left;
        } else {
            x = y.right;
        }

        if (x!= null) {
            x.parent = y.parent;
        }

        if (y.parent == null) {
            this.root = x;
        }
        else if (y === y.parent.left) {
            y.parent.left = x;
        }
        else {
            y.parent.right = x;
        }
        if (y!==node) {
            node.key = y.key
        }
        return y;
    }
}

const bst = new BST({key: 5});
bst.insert(bst.root,{key: 3})
bst.insert(bst.root, {key: 61})
bst.insert(bst.root,{key: 12});
bst.insert(bst.root,{key: 7});
bst.insert(bst.root,{key: 9});
bst.insert(bst.root,{key: 140});
bst.printInOrder(bst.root)
console.log("====")
bst.printInOrder(bst.root)
console.log("====")
// console.log(bst.search(bst.root, 7))
console.log(bst.getSuccessor(bst.search(bst.root, 9)))
// console.log(bst.getMin(bst.root));
console.log(bst.getMax(bst.root));
console.log("====")
// console.log(bst.delete(bst.search(bst.root, 7)))
console.log(bst.getPredecessor(bst.search(bst.root, 7)))
