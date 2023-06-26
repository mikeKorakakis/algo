const { swap } = require("../swap");
function pivot(arr, start = 0, end = arr.length - 1) {
	const pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (arr[i] < pivot) {
			swapIdx++;
			swap(arr, i, swapIdx);
		}
	}
	swap(arr, swapIdx, start);
	console.log(arr);
	return swapIdx;
}

// console.log(pivot([3, 5, 6, 7, 2], 0, 4));

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		var pivotIndex = pivot(arr, left, right);
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

console.log(quickSort([3, 5, 63, 7, 3, 7, 3]));
