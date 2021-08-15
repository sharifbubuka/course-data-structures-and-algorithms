import { areEqual } from '../../src/utils/funcs';
import SinglyLinkedList from '../../src/data-structures/linear/lists/singly-linked-list';
import DoublyLinkedList from '../../src/data-structures/linear/lists/doubly-linked-list';

describe('areEqual()', () => {
  it('should return true if two values are deeply equal, otherwise false', () => {
    expect(areEqual(10, 10)).toBe(true);
    expect(areEqual(SinglyLinkedList, DoublyLinkedList)).toBe(false);
  })
})