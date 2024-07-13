interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}


class MyStack <T> implements IStack<T> {

    private stack : T[];

    constructor(){
        this.stack = [];
    }

    public push(item : T){
        this.stack.push(item);
    }

    public pop() : T | undefined {
        return this.stack.pop();
    }

    public peek():  T | undefined {
        return this.stack[this.stack.length];
    }

    public size(): number {
        return this.stack.length;
    }

}

