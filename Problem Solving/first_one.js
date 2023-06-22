// write a function that takes in a string and returns counts of each character in the string.

charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}

("my phone number is 2334346");
("Hello hi");
charCount(" ");

function charCount(str) {
	// do something
	// return an object with keys that are lowercase alphanumeric characters in the string; values shoud be the counts for those characters
}

function charCount(str) {
	// make object to return at end

	const obj = {};

	// loop over string for each character...
	for (var i of str) {
		var char = i.toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			obj[char] = ++obj[char] || 1;
		}
	}
	// if character is something else (space, period, etc.) don't do anything

	/// return object at end
	return obj;
}

function charCountPerf(str) {
	// make object to return at end

	const obj = {};

	// loop over string for each character...
	for (var i of str) {
		var char = i.toLowerCase();
		var code = char.charCodeAt(0);
		if (
			(code > 47 && code < 58) ||
			(code > 64 && code < 91) ||
			(code > 96 && code < 123)
		) {
			obj[char] = ++obj[char] || 1;
		}
	}
	// if character is something else (space, period, etc.) don't do anything

	/// return object at end
	return obj;
}

console.log(charCountPerf("Hi there!"));
