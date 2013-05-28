var blw10 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var blw20 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
var blw100 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var helpers = ['hundred', 'and', 'thousand'];
var total = [];
var a = 0;
var needhelp = '';

for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		for (var k = 1; k < 11; k++) {
			if (i > 0) {
				needhelp = helpers[0] + helpers[1];
			}
			if (j == 1) {
				total.push(blw10[i] + needhelp + blw20[k-1]);
			} else {
				if (k == 10) {
					if (j == 9) {
						if (i == 9) {
							total.push(blw10[blw10.length - i] + helpers[2]);
						} else {
							total.push(blw10[i+1] + helpers[0]);
						}
					} else {
						total.push(blw10[i] + needhelp + blw100[j+1]);
					}
				} else {
					total.push(blw10[i] + needhelp + blw100[j] + blw10[k]);
				}
			}
		}
	}
}


alert(total.join('').length);