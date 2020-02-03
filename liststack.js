class List {
    constructor() {
        this.head = null;
    }

    insert(node) {
        if (this.head === null) {
            node.next = null;
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    delete(node) {
        if (node === this.head) {
            this.head = this.head.next;
        } else {
            let tNode = this.head;
            while(tNode.next !== node) {
                tNode = tNode.next;
            }
            tNode.next = node.next;
        }
    }

    search(x) {
        let next = this.head;
        while (next) {
            if (next.key === x) {
                return next;
            }
            next = next.next;
        }
    }

    countNodes() {
        let next = this.head;
        let counter = 0;
        let highest = 0;
        while (next) {
            counter++;
            if (highest < next.key) {
                highest = next.key;
            }
            next = next.next;
        }
        return {
            counter, highest
        }
    }
}

class ListStack {

    constructor() {
        this.list = new List();
    }

    push(x) {
        this.list.insert({key: x});
    }

    pop() {
        const elem = this.list.head;
        if (elem) {
            this.list.delete(elem);
            return elem.key;
        }
    }
}

listStack = new ListStack();

listStack.push(12);
listStack.push(15);
console.log(listStack.pop());
console.log(listStack.pop());
console.log(listStack.pop());
listStack.push(132);
console.log(listStack.pop());

