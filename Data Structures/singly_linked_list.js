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
			this.head = 0;
			this.tail = 0;
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
		if (!this.head) 
        {
            this.head = newNode
			this.tail = this.head;
		}
		newnode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
}
// const head = new Node("hello");
// const node = new Node("there");
// const node2 = new Node("how");
const list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("how");
console.log(list.pop());
console.log(list);
