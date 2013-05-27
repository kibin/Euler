var loop = true,
	triangle = 0,
	k = 1;

while (loop) {
	var i = 1,
		j = 0,
		arr = [],
		numdiv = 0;

	triangle += k;
	while (i <= triangle/i) {
		if (triangle % i == 0) {
			arr[j] = i;
			j++;
		}

		i++;
	}
	numdiv = (arr.length - 1) * 2;

	if (numdiv > 500) {
		loop = false
	}
	k++;
}

alert(triangle);