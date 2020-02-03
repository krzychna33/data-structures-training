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

    printInOrder(parent) {
        if (parent.left) {
            this.printInOrder(parent.left);
        }
        console.log(parent);
        if (parent.right) {
            this.printInOrder(parent.right);
        }
    }

    countNodes(root) {
        if (root == null) {
            return 0;
        } else {
            if (root.left == null && root.right != null || root.left != null && root.right == null) {
                return 1 + this.countNodes(root.left) + this.countNodes(root.right);
            }
            return 0 + this.countNodes(root.left) + this.countNodes(root.right);
        }
    }

    min(parent) {
        if (parent.left) {
            return this.min(parent.left);
        }
        return parent;
    }

    max(parent) {
        if (parent.right) {
            return this.max(parent.right)
        }
        return parent;
    }

    getPredecessor(node) {
        if (node.left) {
            return this.max(node.left);
        } else {
            while (node.parent != null && node.parent.left === node) {
                node = node.parent;
            }
            return node.parent;
        }
    }

    getSuccessor(node) {
        if (node.right) {
            return this.min(node.right);
        } else {
            while (node.parent != null && node.parent.right === node) {
                node = node.parent;
            }
            return node.parent;
        }
    }

    searchElement(parent, value) {
        if (parent == null || parent.key === value) {
            return parent;
        }
        if (parent.key > value) {
            return this.searchElement(parent.left, value);
        } else {
            return this.searchElement(parent.right, value);
        }
    }

    delete(node) {
        let realDel;
        if (node.left === null || node.right === null) {
            realDel = node;
        } else {
            realDel = this.getSuccessor(node);
        }
        if (realDel.left != null) {
            node = realDel.left
        } else {
            node = realDel.right
        }
        if (node != null) {
            node.parent = realDel.parent;
        }
        if (realDel.parent === null) {
            this.root = node;
        } else if (realDel === realDel.parent.left) {
            realDel.parent.left = node;
        }
    }

    getSum() {
        let min = this.min(this.root);
        let next1 = this.getSuccessor(min);
        let next2 = this.getSuccessor(next1);
        let sum = min.key + next1.key + next2.key;
        return sum;
    }


}

myBst = new BST({key: 8});
myBst.insert(myBst.root, {key: 7});
myBst.insert(myBst.root, {key: 2});
myBst.insert(myBst.root, {key: 2});
myBst.insert(myBst.root, {key: 12});
// // for (let i=0; i<5; i++) {
// //     let value = Math.floor(Math.random()*25);
// //     console.log(value)
// //     myBst.insert(myBst.root,{key: value});
// // }
// console.log("---")
myBst.printInOrder(myBst.root);
// console.log("---")
// console.log(myBst.max(myBst.root));
// console.log("---")
// console.log(myBst.min(myBst.root));
// console.log("---")
// console.log(myBst.root)
// let searched = myBst.searchElement(myBst.root, 2);
// console.log(searched);
// console.log("***")
// console.log(myBst.getPredecessor(searched))
// console.log(myBst.getSuccessor(searched))
console.log(myBst.countNodes(myBst.root));
// console.log(myBst.getPredecessor(myBst.max(myBst.root)));
