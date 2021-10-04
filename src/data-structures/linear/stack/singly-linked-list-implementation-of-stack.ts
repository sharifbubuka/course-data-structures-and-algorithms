import { SinglyLinkedNode } from "../../../utils/nodes";
import SinglyLinkedList from "../lists/singly-linked-list";
import { errors } from "./utils";

export default class SinglyLinkedListStack {
    private list: SinglyLinkedList;
    private top: number

    constructor() {
        this.list = new SinglyLinkedList();
        this.top = -1;
    }

    public size(): number {
        return this.list.size();
    }

    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    public peek(): Error | any {
        return this.list.peek();
    }

    public push(item: any): void {
        this.list.append(item);
    }

    public pop(): Error| void {
        return this.list.pop();
    }

    public display(): string {
        if (this.list.isEmpty() === true) {
            return 'Stack is empty!'
        }
        const elements = [...this.list];
        let message = '[';
        for(let i = 0; i < elements.length; i++) {
            if (i === this.top) {
                message += `${elements[i]}`
            } else {
                message += `${elements[i]}, `
            }
        }
        message += ']';
        return message
    }

    // public change(index: number, item: any) {
    //     if (index > this.top || this.top === -1) {
    //         return new Error(errors.INDEX_OUT_OF_BOUNDS_ERROR);
    //     }
    //     this.arr[index] = item;
    // }

    public search(item: any): boolean {
        return this.list.contains(item);
    }
}