import { errors } from "./utils";

export default class ArrayStack {
    private arr: Array<any>
    private top: number

    constructor() {
        this.arr = [];
        this.top = -1;
    }

    public size(): number {
        return this.top + 1;
    }

    public isEmpty(): boolean {
        if (this.arr.length === 0) {
            return true;
        }
        return false;
    }

    public peek(): Error | any {
        if (this.top === -1) {
            return new Error(errors.UNDERFLOW_ERROR)
        }
        return this.arr[this.top];
    }

    public push(item: any): void {
        this.top += 1;
        this.arr[this.top] = item;
    }

    public pop(): Error| void {
        if (this.top === -1) {
            return new Error(errors.UNDERFLOW_ERROR);
        }
        this.arr.pop();
        this.top -= 1;
    }

    public display(): string {
        if (this.top === -1) {
            return 'Stack is empty!'
        }
        let message = '[';
        for(let i = 0; i <= this.top; i++) {
            if (i === this.top) {
                message += `${this.arr[i]}`
            } else {
                message += `${this.arr[i]}, `
            }
        }
        message += ']';
        return message
    }

    public change(index: number, item: any) {
        if (index > this.top || this.top === -1) {
            return new Error(errors.INDEX_OUT_OF_BOUNDS_ERROR);
        }
        this.arr[index] = item;
    }

    public search(item: any): boolean {
        // Note: There are various search algorithms that can be implemented here.
        for(let i = 0; i <= this.top; i++) {
            if (this.arr[i] === item) {
                return true;
            }
        }
        return false;
    }
}