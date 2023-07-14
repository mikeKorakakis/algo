// Write a function called maxSubArraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive
// elements in the array.

// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); //6
// console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); //13
// console.log(maxSubArraySum([], 4)); //null

function maxSubArraySum(arr, num) {
	if (arr.length < num) return null;
	let max = 0;
	for (let i = 0; i < num; i++) {
		max += arr[i];
	}
    let maxCandidate = max
	for (let i = num; i < arr.length; i++) {
		console.log(max, arr[i], arr[i - num]);
		maxCandidate = maxCandidate + arr[i] - arr[i - num];
		console.log(maxCandidate);
		if (maxCandidate > max) max = maxCandidate;
	}
	return max;
}

// function maxSubArraySum(arr, num) {
// 	if (arr.length === 0) return null;

// 	var maxSum = 0;
// 	for (var i = 0; i < num; i++) {
// 		maxSum += arr[i];
// 	}
//     let max = maxSum
//     for (var j = num; j < arr.length; j++){
//         max = max - arr[j - num] + arr[j]
//         if(max >= maxSum)  maxSum = max
//     }
//     return maxSum
//     // console.log(maxSum)
// }
