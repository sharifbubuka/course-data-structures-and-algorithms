type Value = any;
type Next = SinglyLinkedNode | undefined;

export class SinglyLinkedNode {
  private value: Value = undefined;
  private next: Next = undefined;

  constructor(value?: Value, next?: Next) {
    if (value !== undefined) this.value = value;
    if (next !== undefined) this.next = next;
  }

  // accessor methods
  public getValue(): Value {
    return this.value;
  }

  public getNext(): Next {
    return this.next;
  }

  // modifier methods
  public setValue(value: Value) {
    this.value = value;
  }

  public setNext(next: Next) {
    this.next = next;
  }
}