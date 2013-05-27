var sum = 600851475143, 
	i = 1, 
	factor;

while (sum > 1) {
	if (sum % i == 0) {
		sum /= i;
		factor = i;
		i++;
	} else {
		i++;
	}
}

alert(factor);