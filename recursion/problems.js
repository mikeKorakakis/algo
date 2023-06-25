// power
// Write a function called power which accepts a base and an exponent.
//  The function should return the power of the base to the exponent.
//  This function should mimic the functionality of Math.pow()
//   - do not worry about negative bases and exponents.

function power(base, exp) {
	if (exp === 0) return 1;
	return base * power(base, exp - 1);
}

// console.log(power(3, 0));

// factorial
// Write a function factorial which accepts a number and returns the factorial of that number.
//  A factorial is the product of an integer and all the integers below it;
//   e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num) {
	if (num == 1 || num == 0) return 1;

	return num * factorial(num - 1);
}

// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
	if (arr.length === 1) return arr[0];
	return arr[0] * productOfArray(arr.slice(0));
}

// recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
	if (num === 0) return 0;
	return num * recursiveRange(num - 1);
}

// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
//  Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8,
//  ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num) {
	if (num === 1 || num === 2) {
		return 1;
	}
	return fib(num - 2) + fib(num - 1);
}

// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
	if (str.length === 1) return str[0];
	return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
}

// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed
// to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome1(str) {
	function reverse(str) {
		if (str.length === 1) return str[0];
		return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
	}

	const newStr = reverse(str);
	return str == newStr;
}

function isPalindrome(str) {
	if (str.length === 0 || str.length === 1) return true;
	return (
		str[0] === str[str.length - 1] &&
		isPalindrome(str.substring(1, str.length - 1))
	);
}

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false

// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback.
//  The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, fn) {
	if (arr.length === 1) return fn(arr[0]);

	return fn(arr[0]) || someRecursive(arr.slice(1), fn);
}

// const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)) // false

// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

function flatten(arr) {
	if (arr.length === 0) return [];
	return Array.isArray(arr[0])
		? flatten(arr[0]).concat(flatten(arr.slice(1)))
		: [arr[0]].concat(flatten(arr.slice(1)));
}

function flatten2(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			newArr = newArr.concat(flatten2(arr[i]));
		} else {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
	let upper = arr[0][0].toUpperCase() + arr[0].substring(1);

	if (arr.length === 1) return upper;

	return [upper].concat(capitalizeFirst(arr.slice(1)));
}

// console.log(capitalizeFirst(["hello", "this", "cat"]));

function nestedEvenSum(obj) {
	var sum = 0;
	for (var key in obj) {
		var val = obj[key];
		if (typeof val === "object") {
			// console.log(key)
			sum += nestedEvenSum(val);
		} else if (typeof val === "number" && val % 2 === 0) {
			sum += val;
		}
	}
	return sum;
}

// var obj1 = {
// 	outer: 2,
// 	obj: {
// 		inner: 2,
// 		otherObj: {
// 			superInner: 2,
// 			notANumber: true,
// 			alsoNotANumber: "yup",
// 		},
// 	},
// };

// var obj2 = {
// 	a: 2,
// 	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
// 	c: { c: { c: 2 }, cc: "ball", ccc: 5 },
// 	d: 1,
// 	e: { e: { e: 2 }, ee: "car" },
// };

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizedWords(arr) {
	if (arr.length === 0) return arr;
	var upper = arr[0].toUpperCase();
	upper = [upper];
	return upper.concat(capitalizedWords(arr.slice(1)));
}
// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which
// are numbers and converts them to strings. Recursion would be a great way to solve this!

// let obj = {
// 	num: 1,
// 	test: [],
// 	data: {
// 		val: 4,
// 		info: {
// 			isRight: true,
// 			random: 66,
// 		},
// 	},
// };

// console.log(stringifyNumbers(obj));

function stringifyNumbers(obj) {
	var res = {};
	for (var key in obj) {
		var object = obj[key];
		// console.log(object, typeof object, Array.isArray(object))
		if (typeof object === "object" && !Array.isArray(object)) {
			Object.assign(res, { [key]: stringifyNumbers(object) });
		} else if (typeof object === "number") {
			Object.assign(res, { [key]: object.toString() });
		} else {
			Object.assign(res, { [key]: object });
		}
		console.log(res);
	}
	return res;
}

// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj = {
	stuff: "foo",
	data: {
		val: {
			thing: {
				info: "bar",
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: "baz",
					},
				},
			},
		},
	},
};

console.log(collectStrings(obj));

function collectStrings(obj) {
	var res = [];

	for (var key in obj) {
		var object = obj[key];
		if (typeof object === "string") {
			res = res.concat(object);
		} else if (typeof object === "object" && !Array.isArray(object)) {
			res = res.concat(collectStrings(object));
		}
	}

	return res;
}
