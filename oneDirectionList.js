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

list = new List();
list.insert({key: 15});
list.insert({key: 17});
list.insert({key: 12});
list.insert({key: 11});
list.delete(list.search(17));
console.log(list.search(17));
console.log(list.countNodes());
