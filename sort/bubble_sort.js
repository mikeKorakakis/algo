const { swap } = require("../swap");

function bubbleSort(arr) {
	let swaps = 0;
	for (let i = arr.length - 1; i >= 0; i--) {
		for (let j = 0; j <= i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				swaps++;
			}
		}
		if (swaps === 0) break;
	}
	return arr;
}

// console.log(bubbleSort([1, 2, 45, 32, 65, 33, 3]));

//O(n^2)

var data = Array.apply(null, { length: 100000 }).map(
	() => Math.random());
console.log(data)
// bubbleSort(data);
var arr = [1,2,3]