import {Status} from './Status';

export class Quality {
	constructor(market, profits, threshold=5.0) {
		this.market = market;
		this.profits = profits;

		this.recalculate(threshold);
	}

	recalculate(threshold=5.0) {
		this.threshold = threshold;

		this.status = Status.UNKNOWN;

		if (this.profits && this.profits.length > 0) {
			this.lowest = this.profits.reduce((a,b) => {
				return Math.min(a,b);
			});
			this.highest = this.profits.reduce((a,b) => {
				return Math.max(a,b);
			});

			let total = this.profits.reduce((a,b) => {
				return a+b;
			});
			this.average = total / this.profits.length;

			if (this.lowest < 0 && this.highest > 0) {
				if (this.average >= 0) {
					this.status = Status.MIXED;
				} else {
					this.status = Status.BAD;
				}
			} else if (this.lowest > 0) {
				if (this.average >= threshold) {
					this.status = Status.GREAT;
				} else {
					this.status = Status.GOOD;
				}
			} else {
				if (this.average < (threshold * -1.0)) {
					this.status = Status.AWFUL;
				} else {
					this.status = Status.BAD;
				}
			}
		}
	}
}