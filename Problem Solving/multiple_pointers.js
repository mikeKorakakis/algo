// write a function called sumZero which accepts a sorted array of integers. The function should find the
//first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair
// does not exist.
const {swap} = require('../swap')

function sumZero_naive(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				console.log(arr[i], arr[j]);
				return [arr[i], arr[j]];
			}
		}
	}
}

function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum < 0) {
			left++;
		} else if (sum > 0) {
			right--;
		} else {
			return [arr[left], arr[right]];
		}
	}
	return undefined;
}

// function sumZero(arr) {
// 	let left = 0;
// 	let right = arr.length - 1;
// 	while (left < right) {
// 		let sum = arr[left] + arr[right];
// 		if (sum === 0) {
// 			console.log(arr[left], arr[right]);
// 			return [arr[left], arr[right]];
// 		} else if (sum > 0) {
// 			left++;
// 		} else {
// 			right++;
// 		}
// 	}
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));

// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
//  and counts the unique values in the array.
//  There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

function countUniqueValues(arr){
    if(arr.length === 0) return 0

    let i =0
    let j = 1
    while(j < arr.length){
        if(arr[j] !== arr[i]){
            i++
            arr[i] = arr[j]
            
        }
        j++
    }
   console.log(i+1)
    return i + 1

}

// function countUniqueValues(arr) {
// 	if (arr.length === 0) {
// 		return 0;
// 	}

// 	let first = 0;
// 	let second = first + 1;
// 	while (second < arr.length) {
// 		if (arr[first] !== arr[second]) {
// 			first++;
// 			arr[first] = arr[second];
// 		}
// 		second++;
// 	}

// 	console.log(arr, first + 1);

// 	return first + 1;
// }
