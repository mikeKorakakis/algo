// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

function sameFrequency(num1, num2) {
	const frequencyCounter1 = {};

	var numStr1 = num1.toString();
	var numStr2 = num2.toString();

	if (numStr1.length !== numStr2.length) {
		return false;
	}

	for (var key of numStr1) {
		frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
	}

	for (var key of numStr2) {
		if (key in frequencyCounter1 && frequencyCounter1[key] > 0) {
			frequencyCounter1[key] = frequencyCounter1[key]--;
		} else {
			return false;
		}
	}
	return true;
}

// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates("a", "b", "c", "a")); // true

// function areThereDuplicates(...args){
//     if (args.length === 0) return false
//     var frequencyCounter1 = {}

//     for (var key of  args){
//         if(key in frequencyCounter1) return true
//         frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1
//     }
//     return false
// }

function areThereDuplicates(...args) {
	// console.log(new Set(args).size)
	const sorted = args.sort();

	let first = 0;
	let second = 1;

	while (second < sorted.length) {
		if (sorted[first] === sorted[second]) {
			return true;
		}
		first++;
		second++;
	}
	return false;
}

// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

function averagePair(arr, num) {
	if (arr.length === 0) return false;
	let first = 0;
	let second = arr.length - 1;
	while (first <= second) {
		let average = (arr[first] + arr[second]) / 2;
		if (average < num) {
			first++;
		} else if (average > num) {
			second--;
		} else {
			return true;
		}
	}
	return false;
}

// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the
// first string form a subsequence of the characters in the second string. In other words, the function should check
// whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O

function isSubsequence(str1, str2) {
	if (str2.length < str1.length) return false;

	var p1 = 0;
	var p2 = 0;

	while (p2 < str2.length) {
		if (str1[p1] === str2[p2]) {
			if (p1 === str1.length - 1) return true;
			p1++;
		}
		p2++;
	}
	return false;
}

// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array.
//  In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

function maxSubarraySum(arr, num) {
	if (arr.length < num) {
		return null;
	}
	let maxSum = 0;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	let index = num;
	let sum = maxSum;

	while (index < arr.length) {
		sum = sum + arr[index] - arr[index - num];
		if (sum > maxSum) {
			maxSum = sum;
		}
		index++;
	}
	return maxSum;
}

// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
// Time Complexity - O(n)

// Space Complexity - O(1)

function minSubArrayLen(arr, num) {
	if (arr.length === 0) return 0;

	let index1 = 0;
	let index2 = 0;
	let minLen = arr[index1] >= num ? 1 : Infinity;
	let sum = arr[index1];
	while (index2 < arr.length) {
		if (sum - arr[index1] >= num) {
			sum = sum - arr[index1];
			index1++;
			if (index2 - index1 + 1 < minLen) minLen = index2 - index1 + 1;
			continue;
		}
		index2++;
		sum = sum + arr[index2];
	}
	return minLen === Infinity ? 0 : minLen;
}

// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
// Time Complexity - O(n)

// function findLongestSubstring(str) {
// 	if (str.length === 0) {
// 		return 0;
// 	}

// 	var first = 0;
// 	var second = 1;
// 	var maxLength = second - first;
// 	var charObj = {};
// 	charObj[str[first]] = 0;
// 	while (second < str.length) {
// 		// console.log(charObj);
// 		var char = str[second];
// 		// console.log(char);
// 		if (!charObj.hasOwnProperty(char)) {
// 			charObj[char] = second;
// 			if (maxLength < second - first + 1) {
// 				// console.log(second, first)
// 				maxLength = second - first + 1;
//                 // console.log('maxlength', maxLength)
// 			}
// 		} else {
// 			// console.log(char, str.lastIndexOf(char))
// 			first = charObj[char] + 1;
// 			second = first;
//             charObj = {}
// 			charObj[str[first]] = first;
//             // console.log(charObj)
// 		}
// 		second++;
// 	}
// 	return maxLength;
// }

function findLongestSubstring(str){
    let longest = 0;
    let seen = {}
    let start = 0
    
    for (let i = 0; i < str.length; i++){
        console.log(seen)
        let char = str[i]
        if(seen[char]){
            start = Math.max(start, seen[char])
        }
        longest = Math.max(longest, i - start + 1)
        seen[char] = i + 1
    }
    
    return longest;
}
