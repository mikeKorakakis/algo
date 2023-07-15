// function getDigit(num, pos){
//     return Math.floor((Math.abs(num) / Math.pow(10, pos))) % 10
// }

function getDigit(num, pos) {
	return Math.floor((Math.abs(num) / Math.pow(10, pos)) % 10);
}

// console.log(getDigit(1234, 2))

// function digitCount(num) {
//     if(num === 0) return 1
//     return Math.floor(Math.log10(Math.abs(num))) + 1
// }

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(0));

// function mostDigits(arr) {
// 	if (arr.length === 0) return 0;
// 	let mostDigits = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		const count = digitCount(arr[i]);
// 		if (mostDigits < count) {
// 			mostDigits = count;
// 		}
// 	}
// 	return mostDigits;
// }

function mostDigits(arr) {
	if (arr.length === 0) return 0;
	let mostDigits = 0;
	for (let i = 0; i < arr.length; i++) {
		const count = digitCount(arr[i]);
		mostDigits = Math.max(count, mostDigits);
	}
	return mostDigits;
}

// console.log(mostDigits([12,345,2222]))

function radixSort(arr) {
	const most = mostDigits(arr);
	let newArr = [...arr];

	for (let j = 0; j < most; j++) {
		let buckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < newArr.length; i++) {
			const digit = getDigit(newArr[i], j);
			buckets[digit].push(newArr[i]);
			// newArr = [].concat
		}
        newArr = [].concat(...buckets)
		
	}
    return newArr
}

// function radixSort(arr) {
// 	const most = mostDigits(arr);
// 	let newArr = [...arr];
// 	for (let k = 0; k < most; k++) {
// 		let bucket = Array.from({ length: 10 }, () => []);
// 		for (let i = 0; i < newArr.length; i++) {
// 			let el = newArr[i];
// 			let digit = getDigit(el, k);
// 			bucket[digit].push(newArr[i]);
// 		}
// 		// console.log(bucket)
// 		// newArr = bucket.reduce((x, aggr)=>{return x.concat(aggr)}, [])
// 		newArr = [].concat(...bucket);
// 		// console.log(newArr)
// 	}
// 	return newArr;
// }
console.log(radixSort([123, 1, 11, 1111]));
