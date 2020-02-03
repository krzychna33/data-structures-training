const process = require('process');

class Queue {
    constructor(){
        this.Q = [0,0,0,0,0,0,0,0,0,0];
        this.size = 10;
        this.writeCur = 0;
        this.readCur = 0;
    }

    enqueue(x) {
        if (this.writeCur < this.size) {
            this.Q[this.writeCur] = x;
            this.writeCur++;
        }
    }

    dequeue() {
        if (this.readCur !== this.writeCur) {
            const elem = this.Q[this.readCur];
            this.readCur++;
            return elem;
        }
    }

    help_printQueue() {
        for (let i = 0; i<this.size; i++) {
            process.stdout.write(`${this.Q[i]} `);
        }
        process.stdout.write(`\n`);
        for (let i = 0; i<this.size; i++) {
            if (i==this.writeCur) {
                process.stdout.write(`^ `);
            } else {
                process.stdout.write("  ");
            }
        }
        process.stdout.write(`\n`);
        for (let i = 0; i<this.size; i++) {
            if (i==this.readCur) {
                process.stdout.write(`^ `);
            } else {
                process.stdout.write("  ");
            }
        }
    }
}

class Stack {
    constructor() {
        this.Q = new Queue();
        this.R = new Queue();
    }

    push(x) {
        this.R.enqueue(x);
        while(this.Q.readCur !== this.Q.writeCur) {
            this.R.enqueue(this.Q.dequeue());
        }
        const buff = this.R;
        this.R = this.Q;
        this.Q = buff;
    }

    pop() {
        return this.Q.dequeue();
    }
}


const stack = new Stack();

stack.push(12);
stack.push(14);
console.log(stack.pop())
console.log(stack.pop())
stack.push(99);
stack.push(992);
console.log(stack.pop())
console.log(stack.pop())
