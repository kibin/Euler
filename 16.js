var arr = [2],
	pow = 2,
	i, k = 1;

while (k < 1000) {
	i = 0;
	while(i < arr.length) {
		arr[i] *= pow;
		if (arr[i] > 9) {
			arr[i] -=10;
			if (i == 0) {
				arr.unshift(1);
				i += 2;
			} else {
				arr[i - 1] += 1;
				i++;
			}
		} else {
			i++;
		}
	}
	
	k++;
}

alert(arr.reduce(function(a, b) {return a + b}));