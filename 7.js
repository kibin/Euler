var j = 2,
	k = 0;

while (k < 10001) {
	var isprime = true;
	for (var i = 2; i <= j/i; i++) {
		if (j % i == 0) { 
			isprime = false;
			break;
		}
	}
	if (isprime) {
		k++;
	}
    if (k < 10001) {
        j++;
    }
}

alert(j);