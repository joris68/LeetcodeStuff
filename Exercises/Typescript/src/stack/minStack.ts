class MinStack {

    store: number [];
    min : number; // stores index of minumum value

    constructor() {
        this.store = new Array<number>;
    }

    push(val: number): void {
        this.store.push(val);
    }

    pop(): void {
        this.store.pop();
    }

    top(): number {
        if(this.store.length > 0) {
            return this.store[this.store.length - 1];
        }
    }

    getMin(): number {
        
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */