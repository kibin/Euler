var sum = 600851475143, 
	i = 1;

while (sum > 1) {
	if (sum % i == 0) {
		sum /= i;
		if (sum > 1) {
			i++;
		}
	} else {
		i++;
	}
}

alert(i);