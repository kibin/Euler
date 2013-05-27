var totalArr = [],
	collatz;

for (var i = 2; i < 1000000; i++) {
	var j = i;
	var arr = [];
	var k = 0;

	while (j > 1) {
		if (j % 2 != 0) {
			j = j * 3 + 1;
			arr.push(j);
			k++;
		} else {
			j = j/2;
			arr.push(j);
			k++;
		}
	}

	totalArr.push([i, arr.length]);
}

alert(totalArr.sort(function(a, b) { return b[1]-a[1]; })[0][0]);