var prime = 0;
	j = 2,
	k = 0;

while (k < 10001) {
	var isprime = true;
	var d = j;
	for (var i = 2; i <= d/i; i++) {
		if (j % i == 0) { 
			isprime = false;
			break;
		}
	}
	if (isprime) {
		k++;
		prime = j;
	}
	j++;
}

alert(prime);