type Next = SinglyLinkedNode | any;
type Prev = SinglyLinkedNode | any;

export class SinglyLinkedNode {
  public value: any;
  public next: Next;

  constructor(value: any, next?: any) {
    this.value = value;
    this.next = next;
  }
}

export class DoublyLinkedNode extends SinglyLinkedNode {
  public prev: Prev;

  constructor(value: any, prev?: any, next?: any) {
    super(value, next);
      this.prev = prev;
  }
}