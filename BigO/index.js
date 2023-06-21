function addUpTo(n) {
    let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

function addUpToFaster(n) {
    const start = performance.now();
	const res = (n * (n + 1)) / 2;
	const end = performance.now();
	console.log(end - start);
	return res;
}
const time = 1000000000
const start1 = performance.now();
console.log(addUpTo(time));
const end1 = performance.now();
console.log((end1 - start1)/1000);

const start2 = performance.now();
console.log(addUpToFaster(time));
const end2 = performance.now();
console.log((end2 - start2)/1000);

