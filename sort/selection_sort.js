const { swap } = require("../swap");

// function selectionSort(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		var min = i;
// 		for (let j = i + 1; j < arr.length; j++) {
// 			console.log(arr);
// 			if (arr[j] < arr[min]) {
// 				min = j;
// 			}
// 		}
// 		if (min !== i) swap(arr, i, min);
// 	}
// 	return arr;
// }

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (min !== i) swap(arr, i, min);
	}
    return arr
}

console.log(selectionSort([7, 2, 45, 32, 65, 33, 3]));

// O(n^2)
