function naiveSearch(str1, str2) {
	var count = 0;
	for (let i = 0; i < str1.length; i++) {
		for (let j = 0; j < str2.length; j++) {
			if (str2[j] !== str1[i + j]) break;
			console.log(str2[j], str1[i + j]);

			if (j === str2.length - 1) count++;
		}
	}
	return count;
}

console.log(naiveSearch("this hello is me hello", "hello"));
