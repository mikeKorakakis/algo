class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const node = new Node(val);
		if (this.root === null) {
			this.root = node;
			return this;
		}

		let current = this.root;
		while (true) {
			if (val === current.val) return undefined;
			if (val > current.val) {
				if (current.right === null) {
					current.right = node;
					return this;
				} else {
					current = current.right;
				}
			} else if (val < current.val) {
				if (current.left === null) {
					current.left = node;
					return this;
				} else {
					current = current.left;
				}
			}
		}
	}

	find(val) {
		let current = this.root;
		if (current === null) return false;
		let found = false;
		while (current && !found) {
			if (val > current.val) {
				current = current.right;
			} else if (val < current.val) {
				current = current.left;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}
}

const tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
// console.log(tree)
console.log(tree.find(5));
