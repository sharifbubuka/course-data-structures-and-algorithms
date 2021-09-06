import { DoublyLinkedNode } from '../../../utils/nodes';

type List = {
  head: DoublyLinkedNode,
  tail: DoublyLinkedNode,
  size: number,
}

export default class CircularLinkedList {
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
}