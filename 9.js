var product;

for (var a = 0; a <= 1000; a++) {
	for (var b = a + 1; b <= 1000; b++) {
		for (var c = b + 1; c <= 1000; c++) {
			if ((a*a + b*b) == c*c && (a + b + c) == 1000) {
				product = a*b*c;
				break;
			}
		}
	}
}

alert(product);