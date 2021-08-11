import { 
  SinglyLinkedNode,
  DoublyLinkedNode 
} from '../../src/utils/nodes/nodes';

describe('Nodes', () => {

  describe('Singly Linked Node', () => {
    let node: SinglyLinkedNode;
    beforeEach(() => {
      node = new SinglyLinkedNode(6)
    })

    it('should be instantiable', () => {
      expect(node.value).toEqual(6);
      expect(node.next).toBeUndefined();
    })

    it('should permit a node as its value and next', () => {
      const testNode = new SinglyLinkedNode(6);
      node.value = testNode;
      node.next = testNode;
      expect(node.value).toEqual(testNode);
      expect(node.next).toEqual(testNode);
    })
  })

  describe('Doubly Linked Node', () => {
    let node: DoublyLinkedNode;
    
    beforeEach(() => {
      node = new DoublyLinkedNode(6);
    })
    it('should be instantiable', () => {
      expect(node.value).toEqual(6);
      expect(node.prev).toBeUndefined();
      expect(node.next).toBeUndefined();
    })

    it('should permit a node as its value, prev and next', () => {
      const testNode = new DoublyLinkedNode(6);
      node.prev = testNode;
      node.value = testNode;
      node.next = testNode;
      expect(node.prev).toEqual(testNode);
      expect(node.value).toEqual(testNode);
      expect(node.next).toEqual(testNode);
    })
  })
})