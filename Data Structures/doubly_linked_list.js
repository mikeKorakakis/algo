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

	traverse() {
		let current = this.head;
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
list.shift();
list.traverse();
list.traverse_inverse();
