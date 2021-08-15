import { DoublyLinkedNode } from '../../../utils/nodes';

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

  }

  public appendEnd(value: any) {

  }

  public appendAt(pos: number, value: any) {

  }

  public deleteStart() {

  }

  public deleteEnd() {

  }

  public peekStart() {

  }

  public peekEnd() {

  }

  public isEmpty() {

  }

  public size() {

  }

  public contains(value: any) {

  }

  public clear() {

  }

  


}