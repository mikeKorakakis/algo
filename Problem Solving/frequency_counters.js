// write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second array. The
// frequency of values must ve the same.

// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); //false

//naive

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let el of arr1) {
		frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1;
	}

	for (let el of arr2) {
		frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1;
	}

	for (let obj in frequencyCounter1) {
		console.log(obj, frequencyCounter1[obj]);
		if (!(obj ** 2 in frequencyCounter1)) return false;

		if (frequencyCounter1[obj] !== frequencyCounter2[obj ** 2])
			return false;
	}
	return true;
}

// function same(arr1, arr2) {
// 	if (arr1.length !== arr2.length) {
// 		return false;
// 	}

// 	for (let i = 0; i < arr1.length; i++) {
// 		let correctIndex = arr2.indexOf(arr1[i] ** 2);
// 		if (correctIndex === -1) {
// 			return false;
// 		}
// 		arr2.splice(correctIndex, 1);
// 	}
// 	return true;
// }

// function same2(arr1, arr2) {
// 	if (arr1.length !== arr2.length) {
// 		return false;
// 	}

// 	let frequencyCounter1 = {};
// 	let frequencyCounter2 = {};

// 	for (let val of arr1) {
// 		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
// 	}

// 	for (let val of arr2) {
// 		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
// 	}

// 	for (let key in frequencyCounter1) {
// 		if (!(key ** 2 in frequencyCounter2)) {
// 			return false;
// 		}
// 		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(same([1, 2, 4, 2], [9, 1, 4, 4]));
// console.log(same2([1, 2, 4, 2], [9, 1, 4, 4]));

// write an anagram algorithm

function validAnagram(string1, string2) {
	if (string1.length !== string2.length) return false;

	const lookup = {};
	for (let i = 0; i < string1.length; i++) {
		const letter = string1[i];
		lookup[letter] = (lookup[letter] || 0) + 1;
	}

	for (let i = 0; i < string2.length; i++) {
		const letter = string2[i];
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] = lookup[letter] -= 1; 
		}
	}
    return true
}

// function validAnagram(string1, string2) {
// 	if (string1.length !== string2.length) {
// 		return false;
// 	}

// 	const lookup = {};

// 	for (let i = 0; i < string1.length; i++) {
// 		let letter = string1[i];
// 		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
// 	}

// 	for (let i = 0; i < string2.length; i++) {
// 		let letter = string2[i];
// 		if (!lookup[letter]) {
// 			return false;
// 		} else {
// 			lookup[letter] -= 1;
// 		}
// 	}
// 	return true;
// }

console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
