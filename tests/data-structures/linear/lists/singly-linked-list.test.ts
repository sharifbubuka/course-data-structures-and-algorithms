import SinglyLinkedList from '../../../../src/data-structures/linear/lists/singly-linked-list';

describe('Singly Linked List', () => {
  let list: SinglyLinkedList;

  beforeEach(() => {
    list = new SinglyLinkedList();
  })

  describe('instanitiate', () => {
    it('should create a new singly linked list', () => {
      expect(list).toBeInstanceOf(SinglyLinkedList);
    })
  })

  describe('append()', () => {
    it('should append to list', () => {
      list.append(4);
      expect(list.size()).toEqual(1);
    })
  })

  describe('peek()', () => {
    it.skip('should throw error on empty list', () => {
      
    })
    it('should return head value in non empty list', () => {
      list.append(7);
      expect(list.peek()).toEqual(7);
    })
  })

  describe('pop()', () => {
    it.skip('should throw error on empty list', () => {

    })

    it('should return head value and reduce list size on non empty list', () => {
      list.append(1); list.append(2);
      const result = list.pop();
      expect(result).toEqual(2);
      expect(list.size()).toEqual(1);
      expect(list.peek()).toEqual(1);
      const secondResult = list.pop();
    })
  })

  describe('isEmpty()', () => {
    it('should return true if list is empty', () => {
      expect(list.isEmpty()).toEqual(true);
    })

    it('should return false is list is not empty', () => {
      list.append(78);
      expect(list.isEmpty()).toEqual(false);
    })
  })

  describe('size()', () => {
    it('should return size of list', () => {
      expect(list.size()).toEqual(0);
      list.append('value');
      expect(list.size()).toEqual(1);
    })
  })
})