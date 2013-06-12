var isit,
	i = 20;

while (true) {
	isit = 'yep';
	for (var j = 11; j <= 20; j++) {
		if (i % j != 0) {
			isit = 'nope';
			break;
		}
	}
	if (isit == 'yep') {
		break;
	}
	i += 20;
}

alert(i);
