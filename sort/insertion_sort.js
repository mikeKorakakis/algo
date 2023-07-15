// function insertionSort(arr) {
// 	for (let i = 1; i < arr.length; i++) {
//         let currentValue = arr[i]

// 		for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//             arr[j+1] = arr[j]
//             console.log(arr)
//         }
//         console.log('j',j)
//         arr[j+1] = currentValue
// 	}
// 	return arr;
// }

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentValue = arr[i];
		for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentValue;
	}
	return arr;
}
console.log(insertionSort([7, 2, 45, 32, 65, 33, 3]));
[2, 7, 45, 32, 65, 33, 3]
[2, 7, 45, 32, 65, 33, 3]
[2, 3, 7, 32, 33, 45, 65]
//O(n^2)
