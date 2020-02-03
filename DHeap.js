class DMaxHeap {
    constructor(array, d = 2) {
        this.heap = array;
        this.size = array.length;
        this.d = d;
    }

    heapify(index) {
        let max = index;
        for (let i = 1; i<=this.d; i++) {
            let child = index*this.d + i;
            if (child < this.size && this.heap[child] > this.heap[max]) {
                max = child;
            }
        }

        if (max !== index) {
            const buff = this.heap[index];
            this.heap[index] = this.heap[max];
            this.heap[max] = buff;
            this.heapify(max)
        }
    }

    buildHeap() {
        for (let i = this.size; i >= 0; i--) {
            this.heapify(i);
        }
    }

    delete(index) {
        this.heap[index] = this.heap[this.size-1];
        this.size--;
        this.heapify(index);
    }


}

const myDMaxHeap = new DMaxHeap([4, 1, 3, 2, 16, 9, 10, 14, 8, 7], 3);
myDMaxHeap.buildHeap()
myDMaxHeap.delete(0)
console.log(myDMaxHeap.heap)