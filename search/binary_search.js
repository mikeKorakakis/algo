// Binary Search Exercise
// Write a function called binarySearch which accepts
// a sorted array and a value and returns the index at which
// the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch -
//  you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Examples:

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
	binarySearch(
		[
			5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
			96, 98, 99,
		],
		10
	)
); // 2
console.log(
	binarySearch(
		[
			5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
			96, 98, 99,
		],
		95
	)
); // 16
console.log(
	binarySearch(
		[
			5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
			96, 98, 99,
		],
		100
	)
); // -1

function binarySearch(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor(arr.length / 2);

	while (start < end) {
		if (arr[start] === num) return start;
		if (arr[end] === num) return end;
		if (num > arr[middle]) {
			start = middle + 1;
		} else if (num < arr[middle]) {
			end = middle - 1;
		} else {
			return middle;
		}
		middle = Math.floor((start + end) / 2);
	}
	return -1;
}
// function binarySearch(arr, num) {
// 	let first = 0;
// 	let second = arr.length - 1;
// 	let middle = Math.floor((first, second) / 2);

// 	while (first <= second) {
//         if(arr[first] === num) return first
//         if(arr[second] === num) return second
// 		if (num > arr[middle]) {
// 			first = middle + 1;
// 		} else if (num < arr[middle]) {
// 			second = middle - 1;
// 		} else {
// 			return middle;
// 		}
// 		middle = Math.floor((first + second) / 2);
// 	}
// 	return -1;
// }
