import { SinglyLinkedNode } from '../../../nodes/nodes';

type Value = any;
type List = Array<SinglyLinkedNode>;
type Node = SinglyLinkedNode;

export default class SinglyLinkedList {
  private list: List = [];
  private head: Node;

  constructor() {
    this.head = new SinglyLinkedNode();
  }

  public List(): SinglyLinkedList {
    return new SinglyLinkedList();
  }

  public add(value: Value) {
    if (this.list.length === 0) {
      let newNode = new SinglyLinkedNode(value, undefined);
      this.list.push(newNode);
      this.head = newNode;
    } else {
      let newNode = new SinglyLinkedNode(value, this.list[this.list.length -1]);
      this.list.push(newNode);
      this.head = newNode;
    }
  }

  public remove(): boolean {
    return false;
  }

  public isEmpty(): boolean {
    if (this.head.getValue() === undefined) {
      return true;
    } else {
      return false;
    }
  }

  public size(): number {
    return this.list.length;
  }
}