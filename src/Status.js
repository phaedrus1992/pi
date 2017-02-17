export class Status {
	constructor(obj) {
		Object.assign(this, obj);
	}

	static get UNKNOWN() {
		return new Status({
			value: 1,
			icon: '❓',
			image: 'question.png',
			bgcolor: '#777',
			label: 'Unknown',
			instruction: "Don't Buy"
		});
	}

	static get AWFUL() {
		return new Status({
			value: 2,
			icon: '💩',
			image: 'poop.png',
			bgcolor: '#bdb58e',
			label: 'Awful',
			instruction: "Don't Buy"
		});
	}

	static get BAD() {
		return new Status({
			value: 3,
			icon: '❌',
			image: 'cross-mark.png',
			bgcolor: '#fdd',
			label: 'Bad',
			instruction: "Don't Buy"
		});
	}

	static get MIXED() {
		return new Status({
			value: 4,
			icon: '😐',
			image: 'neutral-face.png',
			bgcolor: 'white',
			label: 'Mixed',
			instruction: "Don't Buy"
		});
	}

	static get GOOD() {
		return new Status({
			value: 5,
			icon: '✅',
			image: 'check-mark.png',
			bgcolor: '#93d591',
			label: 'Good',
			instruction: "Buy"
		});
	}

	static get GREAT() {
		return new Status({
			value: 6,
			icon: '🤑',
			image: 'money-face.png',
			bgcolor: '#6dd56a',
			label: 'Great',
			instruction: "Buy"
		});
	}

	equals(that) {
		return (that instanceof Status && that.value === this.value);
	}
}
