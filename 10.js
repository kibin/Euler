var sum = 2,
	j = 3;

while (j < 2000000) {
	var isprime = true;
	for (var i = 3; i <= j/i; i++) {
		if (j % i == 0) { 
			isprime = false;
			break;
		}
	}
	if (isprime) {
		sum += j;
	}
	
	j += 2;
}

alert(sum);