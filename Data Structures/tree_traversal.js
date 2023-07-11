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

	bst() {
		const queue = [];
		const data = [];
		const node = this.root;
		queue.push(this.root);
		while (queue.length > 0) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
		return data;
	}

	DFSPreorder() {
		const data = [];

		function preorder(node) {
			data.push(node.val);
			if (node.left) {
				preorder(node.left);
			}
			if (node.right) {
				preorder(node.right);
			}
		}

		preorder(this.root);

		return data;
	}

	DFSPostorder() {
		const data = [];

		function preorder(node) {
			if (node.left) {
				preorder(node.left);
			}
			if (node.right) {
				preorder(node.right);
			}
			data.push(node.val);
		}

		preorder(this.root);

		return data;
	}

	DFSInorder() {
		const data = [];

		function preorder(node) {
			if (node.left) {
				preorder(node.left);
			}
			data.push(node.val);
			if (node.right) {
				preorder(node.right);
			}
		}

		preorder(this.root);

		return data;
	}
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree.bst());

//   10
// 6     15
//3 8      20

console.log(tree.DFSInorder());
