const process = require('process');

class heapMin {
    constructor(A) {
        this.A = A;
        this.size = A.length;
    }

    heapify(i) {
        let left = 2*i + 1;
        let right = 2*i +2;
        let innerTree;
        if (left<=this.size-1 && this.A[left] < this.A[i]) {
            innerTree = left;
        } else {
            innerTree = i;
        }
        if (right <= this.size-1 && this.A[right] < this.A[innerTree]) {
            innerTree = right
        }

        if (innerTree !== i) {
            let buff = this.A[innerTree];
            this.A[innerTree] = this.A[i];
            this.A[i] = buff;
            this.heapify(innerTree)
        }
    }

    buildHeap() {
        for (let i=Math.floor(this.size/2)-1; i>=0; i--) {
            this.heapify(i);
            console.log(i);
        }
    }

    printHeap() {
        console.log(this.A);
    }
}

myHeap2 = new heapMin([10,2,8,3,9,7,6,1,4,5]);
myHeap2.buildHeap();
myHeap2.printHeap();