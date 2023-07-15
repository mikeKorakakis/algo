const { swap } = require("../swap");
// function pivot(arr, start = 0, end = arr.length - 1) {
// 	const pivot = arr[start];
// 	let swapIdx = start;

// 	for (let i = start + 1; i <= end; i++) {
// 		if (arr[i] < pivot) {
// 			swapIdx++;
// 			swap(arr, i, swapIdx);
// 		}
// 	}
// 	swap(arr, swapIdx, start);
// 	console.log(arr);
// 	return swapIdx;
// }

function pivot(arr, start = 0, end = arr.length - 1) {
	const pivot = arr[start];
	let pivotIdx = start;
	for (let i = start + 1; i <= end; i++) {
		if (arr[i] < pivot) {
			pivotIdx++;
			swap(arr, pivotIdx, i);
		}
	}
	swap(arr, pivotIdx, start);
	return pivotIdx;
}

// console.log(pivot([3, 5, 6, 7, 2], 0, 4));
// console.log(pivot([7, 5, 6, 8, 2]));

function quickSort(arr, left = 0, right = arr.length - 1) {
	console.log("arr");
	console.log(arr);
	console.log(left, right);
	if (left < right) {
		let pivotIdx = pivot(arr, left, right);
		quickSort(arr, left, pivotIdx - 1);
        console.log('start right')
		quickSort(arr, pivotIdx + 1, right);
	}
	return arr;
}

// function quickSort(arr, left = 0, right = arr.length - 1) {
// 	if (left < right) {
// 		var pivotIndex = pivot(arr, left, right);
// 		quickSort(arr, left, pivotIndex - 1);
// 		quickSort(arr, pivotIndex + 1, right);
// 	}
// 	return arr;
// }

console.log(quickSort([8, 5, 6, 2, 7, 3]));
