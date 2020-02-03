const process = require('process');

class heapMax {
    constructor(A) {
        this.A = A;
        this.size = A.length;
    }

    heapify(i) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let max = i;
        if (left < this.size && this.A[left] > this.A[max]) {
            max = left;
        }
        if (right < this.size && this.A[right] > this.A[max]) {
            max = right
        }

        if (max !== i) {
            let buff = this.A[max];
            this.A[max] = this.A[i];
            this.A[i] = buff;
            this.heapify(max)
        }
    }

    buildHeap() {
        for (let i = Math.floor(this.size / 2)-1; i >= 0; i--) {
            this.heapify(i);
        }
    }

    insert(x) {
        let index = this.size;
        this.size++;
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.A[parent] < x) {
            console.log(parent)
            this.A[index] = this.A[parent];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
        this.A[index] = x;
    }

    delete(i) {
        this.A[i] = this.A[this.size - 1];
        this.size--;
        this.heapify(i);
    }

    printHeap() {
        console.log(this.A);
    }
}

myHeap = new heapMax([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]);
myHeap.buildHeap()
myHeap.printHeap()

//
// myHeap2 = new heapMax([15,2,1,7,8,9,14]);
// myHeap2.buildHeap();
// myHeap2.printHeap();