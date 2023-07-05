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
			} else if (val > current.val) {
				if (current.left === null) {
					current.left = node;
					return this;
				} else {
					current = current.left;
				}
			}
		}
	}

    find(val){
        let current = this.root;
        if(current === null) return null;
        

    }
}

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
