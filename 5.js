var condition,
	loop = true;
	maxdiv = 20,
	i = 20;

while (loop) {
	condition = true;
	for (var j = 2; j < maxdiv; j++) {
		if (i % j != 0) {
			condition = false;
			break;
		}
	}
	if (condition == true) {
		loop = false;
		break;
	}
	i += maxdiv;
}

alert(i);
