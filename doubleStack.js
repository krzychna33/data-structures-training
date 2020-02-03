class DoubleStack {
    constructor() {
        this.A = []
        this.stack1Cur = 0;
        this.stack2Cur = 5;
    }

    push1(x) {
        if (this.stack1Cur-1 !== this.stack2Cur) {
            this.A[this.stack1Cur] = x;
            this.stack1Cur++;
        }
    }

    push2(x) {
        if (this.stack1Cur-1 !== this.stack2Cur) {
            this.A[this.stack2Cur] = x;
            this.stack2Cur--;
        }
    }

    pop1(x) {
        if(this.stack1Cur > 0) {
            const elem = this.A[this.stack1Cur-1];
            this.stack1Cur--;
            return elem;
        }
    }

    pop2(x) {
        if (this.stack2Cur > 0) {
            const elem = this.A[this.stack2Cur+1];
            this.stack2Cur++;
            return elem;
        }
    }

    help_printStack() {
        for (let i=0; i<6; i++) {
            console.log(this.A[i]);
        }
    }
}

mydoublestack = new DoubleStack();
mydoublestack.push1(12)
mydoublestack.push1(13)
mydoublestack.push2(121)
mydoublestack.push2(1)
mydoublestack.push2(5)
mydoublestack.push2(5)
mydoublestack.push2(5)
mydoublestack.push2(9)
mydoublestack.help_printStack()
console.log("---")

console.log(mydoublestack.pop2());
console.log("---")
mydoublestack.push2(99);
console.log(mydoublestack.pop2());
mydoublestack.help_printStack()
