function merge(arr1, arr2) {
	var arr = [];
	let i = 0,
		j = 0;
	console.log(arr1, arr2, i, j);
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			arr.push(arr1[i]);
			i++;
		} else {
			arr.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		arr.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		arr.push(arr2[j]);
		j++;
	}
	return arr;
}

function mergeSort(arr) {
	console.log(arr);
	if (arr.length === 1) return arr;

	let middle = Math.floor(arr.length / 2);
	// console.log('f',arr.slice(0, middle));
	// console.log('s',arr.slice(middle, arr.length));
	const first = mergeSort(arr.slice(0, middle));
	const second = mergeSort(arr.slice(middle, arr.length));
	console.log("f", first, "s", second);

	return merge(first, second)

	// console.log(first);
}

console.log(mergeSort([3, 5, 6, 2, 8, 9]));

// console.log(merge([1,3,5], [4,6,7,8]))
