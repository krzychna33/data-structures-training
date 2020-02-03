class openHashTable {
    constructor() {
        this.table = [];
        this.size = 10;
    }

    hashFunction(elem) {
        return elem.key % this.size;
    }

    insert(elem) {
        let startIndex = this.hashFunction(elem);
        let index = startIndex
        while (this.table[index] != null) {
            index = (index + 1) % this.size
            if (index === startIndex) {
                return;
            }
        }
        this.table[index] = elem;
    }

    search(elem) {
        let startIndex = this.hashFunction(elem);
        let index = startIndex
        while (this.table[index].key !== elem.key) {
            index = (index + 1) % this.size
            if (index === startIndex) {
                return;
            }
        }
        return this.table[index]
    }
}


ht = new openHashTable();

ht.insert({key: 4, value: 1232});
ht.insert({key: 14, value: 14});
ht.insert({key: 9});
ht.insert({key: 12});
ht.insert({key: 10});
console.log(ht.search({key: 4}))
console.log(ht.table);