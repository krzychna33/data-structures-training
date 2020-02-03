class HeapPriority {
    constructor() {
        this.heap = [21,5,1,4];
        this.size = this.heap.length;
    }

    insert(value) {
        let index = this.size;
        this.size++;
        let parent = Math.floor((index - 1) / 2);
        while(index > 0 && this.heap[parent] < value) {
            this.heap[index] = this.heap[parent];
            index = parent;
            parent = Math.floor((parent-1/2))
        }
        this.heap[index] = value;
    }

    heapify(parent) {
        let left = parent*2 +1;
        let right = parent *2 + 2;
        let maxIndex = parent;
        if (left < this.size && this.heap[left] > this.heap[maxIndex]) {
            maxIndex = left;
        }
        if (right < this.size && this.heap[right] > this.heap[maxIndex]) {

            maxIndex = right;
        }
        console.log(maxIndex)

        if (maxIndex !== parent) {
            let buff = this.heap[parent]
            this.heap[parent] = this.heap[maxIndex]
            this.heap[maxIndex] = buff;
            this.heapify(maxIndex);
        }
    }

    max() {
        return this.heap[0];
    }

    increase(index, key) {
        if (key < this.heap[index]) {
            return new Error();
        }
        this.heap[index] = key;
        let parent = Math.floor((index-1)/2);
        if (index > 0 && this.heap[parent] < this.heap[index]) {
            const buff = this.heap[parent];
            this.heap[parent] = this.heap[index];
            this.heap[index] = buff;
            this.increase(parent, key)
        }
    }

    insert(key) {
        this.heap[this.size] = -1;
        this.size++;
        this.increase(this.size-1, key)
    }
}

let hp = new HeapPriority();
console.log(hp.heap);
hp.heapify(0)
hp.increase(3, 55)
hp.insert(100)
console.log(hp.heap);

