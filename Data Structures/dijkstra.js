class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	// Dijkstra(start, finish) {
	// 	let previous = {};
	// 	let distances = {};
	// 	let nodes = new PriorityQueue();
	// 	let smallest;
	// 	let result = [];
	// 	for (let vertex in this.adjacencyList) {
	// 		if (vertex === start) {
	// 			distances[vertex] = 0;
	// 			nodes.enqueue(vertex, 0);
	// 		} else {
	// 			distances[vertex] = Infinity;
	// 			nodes.enqueue(vertex, Infinity);
	// 		}
	// 		previous[vertex] = null;
	// 	}
	// 	while (nodes.values.length > 0) {
	// 		smallest = nodes.dequeue().val;
	// 		if (smallest === finish) {
	// 			while (previous[smallest]) {
	// 				result.push(smallest);
	// 				smallest = previous[smallest];
	// 			}
    //             result.push(smallest)
    //             break;
	// 		}

	// 		if (smallest || distances[smallest] !== Infinity) {
	// 			for (let neighbor of this.adjacencyList[smallest]) {
	// 				// console.log(neighbor)
	// 				let nextNeighbor = neighbor.node;
	// 				let candidate = distances[smallest] + neighbor.weight;

	// 				if (candidate < distances[nextNeighbor]) {
	// 					distances[nextNeighbor] = candidate;
	// 					previous[nextNeighbor] = smallest;
	// 					nodes.enqueue(nextNeighbor, candidate);
	// 				}
	// 			}
	// 		}
	// 	}
	// 	return result.reverse();
	// }
	Dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let smallest;
	    let path = []
		//build up initial state

		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}
		console.log(distances);
		// as long as there is something to visit
		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			if (smallest === finish) {
				// WE ARE DONE
				// BUILD UP PATH TO RETURN
	            while(previous[smallest])
	            {
	                path.push(smallest)
	                smallest = previous[smallest]
	            }
	            break;
			}
			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					// find neighboring node
					let nextNode = this.adjacencyList[smallest][neighbor];
					console.log(nextNode);
					// calculate distance to neighboring node
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;
					if (candidate < distances[nextNeighbor]) {
						// updating new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						// updating previous - how we got to next neighbor
						previous[nextNeighbor] = smallest;
						// enqueue in priority queue with new priority
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}

	    return path.concat(smallest).reverse()
	}
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
		return this;
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	dequeue() {
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}

		return max;
	}

	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;
			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

// class PriorityQueue {
// 	constructor() {
// 		this.values = [];
// 	}

// 	enqueue(val, priority) {
// 		this.values.push({ val, priority });
// 		this.sort();
// 	}

// 	dequeue() {
// 		return this.values.shift();
// 	}

// 	sort() {
// 		this.values.sort((a, b) => a.priority - b.priority);
// 	}
// }

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("E", "F", 1);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("D", "E", 3);
graph.addEdge("C", "D", 2);
console.log(graph.Dijkstra("A", "E"));
