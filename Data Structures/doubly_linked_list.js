class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let popped = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = popped.prev;
			this.tail.next = null;
			popped.prev = null;
		}
		this.length--;
		return popped;
	}

	shift() {
		if (!this.head) return undefined;
		var oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(val) {
		let node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			const oldHead = this.head;
			this.head = node;
			this.head.next = oldHead.next;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let current;
		if (index <= this.length / 2) {
			let count = 0;
			current = this.head;
			while (count !== index) {
				current = current.next;
				count++;
			}
		} else {
			let count = this.length - 1;
			current = this.tail;
			while (count !== index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}

	set(val, index) {
		var foundNode = this.get(index);
		if (foundNode !== null) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(val, index) {
		if (index < 0 || index >= length) return false;
		if (index === 0) return !!this.push(val);
		if (index === this.length - 1) return !!this.unshift(val);
		let newNode = new Node(val);
		let previousNode = this.get(index - 1);
		let nextNode = previousNode.next;

		previousNode.next = newNode;
		nextNode.prev = newNode;
		newNode.next = nextNode;
		newNode.prev = previousNode;
		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		let removedNode = this.get(index);
		let nextNode = removedNode.next;
		let previousNode = removedNode.prev;
		previousNode.next = nextNode;
		nextNode.prev = previousNode;
		removedNode.prev = null;
		previousNode.next = null;
		this.length--;
		return removedNode;
	}

	traverse() {
		while (current) {
			console.log(current.val);
			current = current.next;
		}
	}
	traverse_inverse() {
		let current = this.tail;
		while (current) {
			console.log(current.val);
			current = current.prev;
		}
	}
}

const list = new DoublyLinkedList();

list.push("one");
list.push("two");
list.push("three");
list.push("four");
// list.shift();
// list.traverse();
// list.traverse_inverse();

console.log(list.get(2));
