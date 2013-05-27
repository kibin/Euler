var sumOfSquares = 0,
	squareOfSums = 0,
	difference;

for (var i = 1; i <= 100; i++) {
	sumOfSquares += i*i;
	squareOfSums += i;
}
squareOfSums *= squareOfSums;

difference = squareOfSums - sumOfSquares;

alert(difference);