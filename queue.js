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

myQue = new Queue();
myQue.enqueue(7);
myQue.enqueue(8);
console.log(myQue.dequeue())
console.log(myQue.dequeue())
console.log(myQue.dequeue())
// myQue.help_printQueue()
