import { DoublyLinkedNode } from '../../../utils/nodes';
import { EMPTY_LIST_ERROR } from '../../../utils/errors';

type List = {
  head: DoublyLinkedNode,
  tail: DoublyLinkedNode,
  size: number,
}

export default class DoublyLinkedList {
  private list: List | undefined;

  constructor() {
    this.list = undefined;
  }

  *[Symbol.iterator](): Iterator<any> {
    if (this.list) {
      let temp: DoublyLinkedNode | any;
      for (temp = this.list.head; temp !== null; temp = this.list.head) {
        yield temp;
      }
    } else {
      return;
    }
  }

  public appendStart(value: any) {
    const newNode = new DoublyLinkedNode(value);

    if (!this.list) {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1
      }
    } else  {
      const temp = this.list;

      newNode.prev = temp.head;

      this.list = {
        head: newNode,
        tail: temp.tail,
        size: temp.size + 1,
      }
    }
  }

  public appendEnd(value: any) {
    const newNode = new DoublyLinkedNode(value);

    if (!this.list) {
      this.list = {
        head: newNode,
        tail: newNode, 
        size: 1,
      }
    } else {
      const temp = this.list;

      newNode.next = temp.tail;

      this.list = {
        head: temp.head,
        tail: newNode,
        size: temp.size + 1,
      }
    }
  }

  public appendAt(pos: number, value: any) {

  }

  public deleteStart() {
    if (!this.list) return new Error(EMPTY_LIST_ERROR);

    if (this.list.size === 1) {
      this.list = undefined;
    } else {
      const temp = this.list;

      this.list = {
        head: temp.head.prev,
        tail: temp.tail,
        size: temp.size - 1,
      }
    }
  }

  public deleteEnd() {
    if (!this.list) return new Error(EMPTY_LIST_ERROR);

    if (this.list.size === 1) {
      this.list = undefined;
    } else {
      const temp = this.list;

      this.list = {
        head: temp.head,
        tail: temp.tail.next,
        size: temp.size - 1,
      }
    }
  }

  public peekStart() {
    if (!this.list) return new Error(EMPTY_LIST_ERROR);
    return this.list.head.value;
  }

  public peekEnd() {
    if (!this.list) return new Error(EMPTY_LIST_ERROR);
    return this.list.tail.value;
  }

  public isEmpty() {
    return !this.list;
  }

  public size() {
    if (this.list) return this.list.size;
    return 0;
  }

  public contains(value: any) {

  }

  public clear() {
    this.list = undefined;
  }
}