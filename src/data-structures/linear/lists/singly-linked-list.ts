import { SinglyLinkedNode } from '../../../../utils/nodes/nodes';

interface List {
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
    if (!this.list) throw new Error('EMPTY_LIST_ERROR');
    return this.list.head.value;
  }

  public pop(): any | Error {
    if (!this.list) throw new Error('EMPTY_ERROR');
    
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
}