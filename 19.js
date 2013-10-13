var k;

for (i = 1900; i <= 2000; i++) {
	for (j = 1; j <= 12; j++) {
		switch (j) {
			case 4:
			case 6:
			case 9:
			case 11:
				k = 30;
				break;
			default:
				k = 31;
				break;
		}
		if (j == 2 && ((i % 4 == 0 && i % 400 == 0) || (i % 4 == 0 && i % 100 != 0))) {
			k = 29;
		} else if (j == 2 && ((i % 4 != 0 && i % 400 !== 0) || (i % 4 == 0 && i % 400 != 0))) {
			k = 28;
		}
		console.log(i, j, k)
	}
}