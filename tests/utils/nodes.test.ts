import { SinglyLinkedNode } from '../../utils/nodes/nodes';

describe('Singly Linked Node', () => {
  it('should be instantiable', () => {
    const node = new SinglyLinkedNode(8);
    expect(node.value).toEqual(8);
    expect(node.next).toBeUndefined();
  })

  it('should permit a Singly linked node as its value and next', () => {
    const firstNode = new SinglyLinkedNode(8);
    const secondNode = new SinglyLinkedNode(6);
    const thirdNode = new SinglyLinkedNode(firstNode, secondNode);
    expect(thirdNode.value).toEqual(firstNode);
    expect(thirdNode.next).toEqual(secondNode);
  })
})