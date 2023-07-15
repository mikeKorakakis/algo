// optimal substructure --> optimal solution comes from the optimal solution of the subproblems
// overlapping subproblems

//inefficient without memo O(2^n)
//efficient is O(n)
function fib(n, memo = []) {
	if (memo[n] !== undefined) return memo[n];
	if (n <= 2) return 1;
	let res = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = res;
	return res;
}

// tabulation --> store results in array
// function fib2(n) {
// 	if (n <= 2) return 1;
// 	var fibNums = [0, 1, 1];
// 	for (var i = 3; i <= n; i++) {
// 		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
// 	}
// 	return fibNums[n];
// }

function fib2(n) {
	if (n <= 2) return 1;
	const res = [0, 1, 1];
	for (let i = 3; i <= n; i++) {
		res[i] = res[i - 1] + res[i - 2];
	}
    return res[n]
}

console.log(fib2(100));
