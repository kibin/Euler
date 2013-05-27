var total = 2,
	a = 2,
	b = 1,
	c = 0;

while(c < 4000000) {
	c = a + b;
	b = a;
	a = c;
	if (c % 2 == 0) {
		total += c;
	}
}

alert(total);