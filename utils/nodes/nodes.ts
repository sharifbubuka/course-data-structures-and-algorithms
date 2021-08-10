// type Value = SinglyLinkedNode;
type Next = SinglyLinkedNode | any;

export class SinglyLinkedNode {
  public value: any;
  public next: Next;

  constructor(value: any, next?: any) {
    this.value = value;
    this.next = next;
  }

  // // accessor methods
  // public getValue(): Value {
  //   return this.value;
  // }

  // public getNext(): Next {
  //   return this.next;
  // }

  // // modifier methods
  // public setValue(value: Value) {
  //   this.value = value;
  // }

  // public setNext(next: Next) {
  //   this.next = next;
  // }
}