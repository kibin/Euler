var condition,
	loop = true;
	maxdiv = 20,
	multiple = 0,
	i = 20;

while (loop) {
	for (var j = 2; j < maxdiv; j++) {
		if (i % j == 0) {
			condition = true;
		} else {
			condition = false;
			break;
		}
	}
	if (condition == true) {
		multiple = i;
		loop = false;
		break;
	}
	i += maxdiv;
}

alert(multiple);