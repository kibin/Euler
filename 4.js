var palindroms = [];

for (var i = 100; i < 1001; i++) {
	for (var j = i + 1; j < 1000; j++) {
		var test = (i * j).toString();
		if (test == test.split('').reverse().join('')) {
			palindroms.push(test);
		}
	}
}

alert(palindroms.sort(function(a, b) { return b - a; })[0]);