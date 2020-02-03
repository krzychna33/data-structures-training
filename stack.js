class Stack {
    constructor() {
        this.S = [];
        this.size = 0;
        this.maxSize = 10;
    }

    push(x) {
        if (this.size < this.maxSize) {
            this.S[this.size] = x;
            this.size++;
        }
    }

    pop() {
        if (this.size > 0) {
            const elem = this.S[this.size-1];
            this.size--;
            return elem;
        }
    }
}

mystack = new Stack();
mystack.push(12);
mystack.push(1);
console.log(mystack.pop());
console.log(mystack.pop());
console.log(mystack.pop());
mystack.push(111);
console.log(mystack.pop());

module.exports = {
    Stack
}
