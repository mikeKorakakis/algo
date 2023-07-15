function countdown(num) {
	if (num < 0) {
		console.log("all done");
		return;
	}
	console.log(num);
	num--;
	countdown(num);
}

// countdown(10);

function factorial(num) {
	if (num === 0) return 1;
	if (num === 1) return 1;
	return num * factorial(num - 1);
}

// console.log(factorial(3))

// function collectOddValues(arr) {
// 	let result = [];

// 	function helper(helperInput) {
// 		if (helperInput.length === 0) {
// 			return;
// 		}

// 		if (helperInput[0] % 2 !== 0) {
// 			result.push(helperInput[0]);
// 		}

// 		helper(helperInput.slice(1));
// 	}
// 	helper(arr);
// 	return result;
// }

function collectOddValues(arr) {
	let res = [];
	function helper(arr) {
		if (arr.length === 0) return;

		if (arr[0] % 2 === 0) {
			res.push(arr[0]);
		}

		helper(arr.slice(1));
	}
	helper(arr);
	return res;
}

function collectOddValues2(arr) {
	let newArr = [];
	if (arr.length === 0) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1)));
	return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
