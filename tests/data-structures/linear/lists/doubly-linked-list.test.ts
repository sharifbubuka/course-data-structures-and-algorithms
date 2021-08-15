import DoublyLinkedList from '../../../../src/data-structures/linear/lists/doubly-linked-list';

describe('Doubly Linked List Tests', () => {

  let list: DoublyLinkedList;

  beforeEach(() => {
    list = new DoublyLinkedList();
  })

  describe('constructor', () => {
    it('should be instantiable', () => {
      expect(list).toBeInstanceOf(DoublyLinkedList);
    })

    it.skip('should be iterable', () => {
      list.appendStart(1); list.appendStart(2);
      expect([...list]).toBeDefined();
      expect([...list][0]).toEqual(1);
    })
  })

  describe.skip('appendStart()', () => {
    it('should append to start of list', () => {
      list.appendStart(1);
      expect(list.size()).toEqual(1);
      expect(list.peekStart()).toEqual(1);
      expect(list.peekEnd()).toEqual(1);
      expect(list.contains(1)).toBe(true);
      list.appendStart(2);
      expect(list.size()).toEqual(2);
      expect(list.peekStart()).toEqual(2);
      expect(list.peekEnd()).toEqual(1);
      expect(list.contains(2)).toBe(true);
    })
  })

  describe.skip('appendEnd()', () => {
    it('should append to end of the list', () => {
      list.appendEnd(1);
      expect(list.size()).toEqual(1);
      expect(list.peekStart()).toEqual(1);
      expect(list.peekEnd()).toEqual(1);
      expect(list.contains(1)).toBe(true);
      list.appendEnd(2);
      expect(list.size()).toEqual(2);
      expect(list.peekStart()).toEqual(1);
      expect(list.peekEnd()).toEqual(1);
      expect(list.contains(2)).toBe(true);
    })
  })

  describe.skip('appendAt', () => {
    it('should return error if previous node of position node is NULL', () => {
      list.appendStart(1); list.appendStart(2);
      expect(list.appendAt(1, 2)).toBeInstanceOf(Error);
    })

    it('should append at the 0-indexed position provided in the list', () => {
      list.appendStart(1); list.appendStart(2);
      list.appendAt(0, 3);
      expect(list.size()).toEqual(3);
      expect(list.peekStart()).toEqual(2);
      expect(list.peekEnd()).toEqual(1);
      expect(list.contains(3)).toBe(true);
    })
  })

  describe.skip('deleteStart()', () => {
    it('should return error if list is empty', () => {
      expect(list.deleteStart()).toBeInstanceOf(Error);
    })

    it('should delete at start of the list', () => {
      list.appendStart(1); list.appendStart(2);
      list.deleteStart();
      expect(list.size()).toEqual(1);
      expect(list.peekStart()).toEqual(1);
      expect(list.peekEnd()).toEqual(1);
      expect(list.contains(2)).toBe(false);
    })
  })

  describe.skip('deleteEnd()', () => {
    it('should return error if list is empty', () => {
      expect(list.deleteEnd()).toBeInstanceOf(Error);
    })

    it('should delete at start of the list', () => {
      list.appendStart(1); list.appendStart(2);
      list.deleteEnd();
      expect(list.size()).toEqual(1);
      expect(list.peekStart()).toEqual(2);
      expect(list.peekEnd()).toEqual(2);
      expect(list.contains(1)).toBe(false);
    })
  })

  describe.skip('peekStart()', () => {
    it('should return error on an empty list', () => {
      expect(list.peekStart()).toBeInstanceOf(Error);
    })

    it('should return value at the start of the list', () => {
      list.appendStart(1); list.appendStart(2);
      expect(list.peekStart()).toEqual(2);
      expect(list.size()).toEqual(2);
    })
  })

  describe.skip('peekEnd()', () => {
    it('should return error on an empty list', () => {
      expect(list.peekEnd()).toBeInstanceOf(Error);
    })

    it('should return value at the end of the list', () => {
      list.appendStart(1); list.appendStart(2);
      expect(list.peekEnd()).toEqual(1);
      expect(list.size()).toEqual(2);
    })
  })

  describe.skip('isEmpty()', () => {
    it('should return true if list is empty, otherwise false', () => {
      expect(list.isEmpty()).toBe(true);
      list.appendStart(1);
      expect(list.isEmpty()).toBe(false);
    })
  })

  describe.skip('size()', () => {
    it('should return the size of the list', () => {
      expect(list.size()).toEqual(0);
      list.appendStart(1);
      expect(list.size()).toEqual(1);
    })
  })

  describe.skip('contains()', () => {
    it('should return true if list contains value, otherwise false', () => {
      expect(list.contains(1)).toBe(false);
      list.appendStart(1);
      expect(list.contains(1)).toBe(true);
      expect(list.contains(2)).toBe(false);
    })
  })

  describe.skip('clear()', () => {
    it('should clear the list', () => {
      list.clear();
      expect(list.size()).toEqual(0);
      list.appendStart(1); list.appendStart(2);
      list.clear();
      expect(list.size()).toEqual(0);
    })
  })

  describe.skip('', () => {})

  describe.skip('', () => {})
})