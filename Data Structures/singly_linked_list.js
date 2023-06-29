class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		var current = this.head;
		var newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		newTail.next = null;
		this.tail = newTail;
		this.length--;
		if (this.length == 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift() {
		if (!this.head) return undefined;

		const currentHead = this.head;
		this.head = this.head.next;
		currentHead.next = null;
		this.length--;
		if (this.length == 0) {
			this.tail = null;
		}
		return currentHead;
	}

	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		}
		newnode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let count = 0;
		let current = this.head;
		while (count <= this.length) {
			current = current.next;
			count++;
		}
		return current;
	}

	set(val, index) {
		if (!this.head) return null;
		let node = this.get(index);
		if (node) {
			node.val = val;
			return true;
		}
		return false;
	}

	insert(val, index) {
		if (index < 0 || index >= this.length) return false;
		let newNode = new Node(val);
		if (index === 0) !!this.unshift(val);
		if (index === this.length - 1) {
			return !!this.push(val);
		}

		let previous = this.get(index - 1);
		newnode.next = previous.next;
		previous.next = newNode;
		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let removed = this.get(index - 1);
		removed.next = removed.next.next;
		this.length++;
		return removed;
	}

	reverse() {
		let current = this.head;
		this.head = this.tail;
		this.tail = current;

		let prev = null;
		let next = null;
		while (current) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		return this;
	}

	traverse() {
		let current = this.head;

		while (current) {
			console.log(current.val);
			current = current.next;
		}
	}
}
// const head = new Node("hello");
// const node = new Node("there");
// const node2 = new Node("how");
const list = new SinglyLinkedList();
list.push("one");
list.push("two");
list.push("three");
list.push("four");
console.log(list.reverse());
list.traverse();
