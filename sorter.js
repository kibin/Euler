Array.prototype.sortDuplicates = function() {

	var b = [], k = 0;
	b[k] = [];

	for (var i = 0; i < this.length; i++) {
		for (var j = i + 1; j < this.length; j++) {
			if (this[i]) {
				if (this[j] && this[i].split('').sort().join('') == this[j].split('').sort().join('')) {
					b[k].push(this[j]);
					delete this[j];
				}
				if (j == this.length - 1) {
					b[k].push(this[i]);
					delete this[i];
					k++;
					b[k] = [];
				}
			}
		}
		if (i == this.length - 1) {
			if (this[i]) {
				b[k].push(this[i]);
				delete this[i];
			} else {
				b.pop();
			}
		}
	}
	this.splice(0, this.length);
	for (var i = 0; i < b.length; i++) {
		this.push(b[i]);
	}
}

var a = ['нос', 'сон', 'ток', 'торт', 'ротт', 'кот', 'рпоом', 'трот', 'боже', 'ттор'];

alert('[' + a.join(', ') + ']' + '<br /><br />');

a.sortDuplicates();

alert('[[' + a.join('], [') + ']]');