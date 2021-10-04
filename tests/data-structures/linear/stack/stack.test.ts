import ArrayStack from "../../../../src/data-structures/linear/stack/array-implementation-of-stack";
import SinglyLinkedListStack from "../../../../src/data-structures/linear/stack/singly-linked-list-implementation-of-stack";

describe('Stack Tests', () => {
    let arrayStack: ArrayStack;
    let singlyLinkedListStack: SinglyLinkedListStack;

    beforeEach(() => {
        arrayStack = new ArrayStack();
        singlyLinkedListStack = new SinglyLinkedListStack();
    });

    describe('initializes', () => {
        it('should initialize an empty stack', () => {
            expect(arrayStack).toBeInstanceOf(ArrayStack);
            expect(singlyLinkedListStack).toBeInstanceOf(SinglyLinkedListStack);
        })
    });

    describe('push()', () => {
        it('should add an item to the top of the stack', () => {
            arrayStack.push('item');
            expect(arrayStack.peek()).toBe('item');
            expect(arrayStack.size()).toEqual(1);

            singlyLinkedListStack.push('item');
            expect(singlyLinkedListStack.peek()).toBe('item');
            expect(singlyLinkedListStack.size()).toBe(1);
        })
    });

    describe('pop()', () => {
        it('should return an error on popping on an empty stack', () => {
            expect(arrayStack.pop()).toBeInstanceOf(Error);
            expect(singlyLinkedListStack.pop()).toBeInstanceOf(Error);
        })

        it('should pop top most item of a non empty stack', () => {
            arrayStack.push(2);
            expect(arrayStack.pop()).not.toBeInstanceOf(Error);
            expect(arrayStack.size()).toEqual(0);

            singlyLinkedListStack.push(2);
            expect(singlyLinkedListStack.pop()).not.toBeInstanceOf(Error);
            expect(singlyLinkedListStack.size()).toEqual(0);
        })
    });

    describe('isEmpty()', () => {
        it('should return true for an empty stack', () => {
            expect(arrayStack.isEmpty()).toBe(true);
            expect(singlyLinkedListStack.isEmpty()).toBe(true);
        })

        it('should return false for a non empty stack', () => {
            arrayStack.push(2);
            expect(arrayStack.isEmpty()).toBe(false);

            singlyLinkedListStack.push(2);
            expect(singlyLinkedListStack.isEmpty()).toBe(false);
        })
    });

    describe('peek()', () => {
        it('should return an error on peeking an empty stack', () => {
            expect(arrayStack.peek()).toBeInstanceOf(Error);
            expect(singlyLinkedListStack.peek()).toBeInstanceOf(Error);
        })

        it('should return the top most element of the stack', () => {
            arrayStack.push(1);
            expect(arrayStack.peek()).toEqual(1);

            singlyLinkedListStack.push(1);
            expect(singlyLinkedListStack.peek()).toEqual(1);
        })
    });

    describe('size()', () => {
        it('should return the size of an empty stack', () => {
            expect(arrayStack.size()).toEqual(0);
            expect(singlyLinkedListStack.size()).toEqual(0);
        });

        it('should return the size of a non empty stack', () => {
            arrayStack.push(1);
            expect(arrayStack.size()).toEqual(1);

            singlyLinkedListStack.push(1);
            expect(singlyLinkedListStack.size()).toEqual(1);
        })
    });

    describe('change()', () => {
        it('should return an error if the index is out of bounds', () => {
            expect(arrayStack.change(2, 10)).toBeInstanceOf(Error);
            arrayStack.push(2);
            expect(arrayStack.change(2, 10)).toBeInstanceOf(Error);
        })

        it('should change the item at in-bound index given of a non empty error', () => {
            arrayStack.push(2);
            expect(arrayStack.change(0, 4)).not.toBeInstanceOf(Error);
            expect(arrayStack.peek()).toEqual(4);
        })
    });

    describe('search()', () => {
        it('should return true when item is in stack', () => {
            arrayStack.push(3); arrayStack.push(5);
            expect(arrayStack.search(5)).toBe(true);

            singlyLinkedListStack.push(3); singlyLinkedListStack.push(5);
            expect(singlyLinkedListStack.search(5)).toBe(true);
        });

        it('should return false when item is not in stack', () => {
            arrayStack.push(3); arrayStack.push(5);
            expect(arrayStack.search(1)).toBe(false);

            singlyLinkedListStack.push(3); singlyLinkedListStack.push(5);
            expect(singlyLinkedListStack.search(1)).toBe(false);
        });
    });

    describe('display()', () => {
        it('should return a display string stating that stack is empty for an empty stack', () => {
            expect(arrayStack.display()).toBe('Stack is empty!');
            
            expect(singlyLinkedListStack.display()).toBe('Stack is empty!');
        })

        it('should return a display string representation of a non empty stack', () => {
            arrayStack.push(1); arrayStack.push(3); arrayStack.push(6);
            expect(arrayStack.display()).toEqual('[1, 3, 6]');

            singlyLinkedListStack.push(1); singlyLinkedListStack.push(3); singlyLinkedListStack.push(6);
            expect(arrayStack.display()).toEqual('[1, 3, 6]');
        })
    });
})