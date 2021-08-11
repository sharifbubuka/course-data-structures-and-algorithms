import { SinglyLinkedNode } from '../../../utils/nodes/nodes';

type List = {
  head: SinglyLinkedNode;
  size: number;
}

export default class SinglyLinkedList {
  private list: List | undefined;

  constructor() {
    this.list = undefined;
  }

  public append(value: any) {
    const newNode = new SinglyLinkedNode(value);

    if (this.list) {
      newNode.next = this.list.head;
      this.list.head = newNode;
      this.list.size++;
    } else {
      this.list = {
        head: newNode,
        size: 1
      }
    }
  }

  public peek(): any | Error {
    if (!this.list) return new Error('EMPTY_LIST_ERROR');
    return this.list.head.value;
  }

  public pop(): IteratorResult<any> | Error {
    if (!this.list) return new Error('EMPTY_LIST_ERROR');
    
    const prevHead = this.list.head;

    if (this.list.head.next) {
      this.list.head = prevHead.next;
      this.list.size--;
      return prevHead.value;
    } else {
      this.list = undefined;
      return prevHead.value;
    }
  }

  public isEmpty(): boolean {
    return !this.list;
  }

  public size(): number {
    if (this.list) return this.list.size;
    return 0;
  }

  public clear() {
    this.list = undefined;
  }

  public find() {

  }

  public sort() {

  }

  public merge() {

  }

  *[Symbol.iterator](): Iterator<any> {
    if (this.list) {
      let temp: SinglyLinkedNode | any;
      for (temp = this.list.head; temp !== null; temp = this.list.head) {
        yield temp;
      }
    } else {
      return;
    }
  }
}

// const list = new SinglyLinkedList();
// list.append(5);
// console.log([...list])
