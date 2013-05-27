var grid = 20,
	gridlen = grid,
	count = 0,
	d = 0;

var arr = new Array(grid);

for (var i = 0; i < arr.length; i++) {
	arr[i] = 1;
}

while (count < grid) {
	for (var k = 0; k < gridlen; k++) {
		if (k == 0) {
			d = arr[k] * 2;
			arr.splice(k, 1, d);
		} else {
			d = d + arr[k];
			arr.splice(k, 1, d);
		}
	}
	gridlen--;
	count++;
	if (arr.length > 1) {
		arr.shift();
	}
}

alert(arr[0]);