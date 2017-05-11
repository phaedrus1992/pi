import median from 'median';

import {Contract} from './Contract';
import {Quality} from './Quality';
import {Status} from './Status';

import * as Constants from './Constants';

export class Market {
	constructor(data) {
		Object.assign(this, data);
		for (var i=0, len=this.Contracts.length; i < len; i++) {
			this.Contracts[i] = new Contract(this.Contracts[i]);
		}
	}

	allowNull(an) {
		if (typeof an === 'boolean') {
			this._allowNull = an;
		}
		return this._allowNull;
	}

	isLinked() {
		return this.Contracts.length >= 2;
	}

	refreshLong() {
		return Promise.all(this.Contracts.map((c) => {
			return c.loadLong();
		}));
	}

	refreshShort() {
		return Promise.all(this.Contracts.map((c) => {
			return c.loadShort();
		}));
	}

	refreshContracts() {
		const self = this;
		return self.refreshLong().then(() => {
			return self.refreshShort();
		});
	}

	getYesValues() {
		return this.Contracts.map((c) => {
			return c.BestBuyYesCost;
		});
	}

	getNoValues() {
		return this.Contracts.map((c) => {
			return c.BestBuyNoCost;
		});
	}

	getYesSharesToBuy() {
		let quantity = this.Contracts.map((c) => {
			return c.BestBuyYesQuantity || NaN;
		});
		return Math.min.apply(Math, quantity);
	}

	getNoSharesToBuy() {
		let quantity = this.Contracts.map((c) => {
			return c.BestBuyNoQuantity || 0;
		});
		return Math.min.apply(Math, quantity);
	}

	isResolving() {
		if (this.isLinked()) {
			let yeses = this.getYesValues();
			let min = Math.min.apply(null, yeses);
			let max = Math.max.apply(null, yeses);
			let m = median(yeses);

			if (m < 0.10 && max >= 0.90) {
				return !this.isResolved();
			} else {
				return false;
			}
		}
		return undefined;
	}

	isResolved() {
		if (this.isLinked()) {
			let yeses = this.getYesValues();
			let min = Math.min.apply(null, yeses);
			let max = Math.max.apply(null, yeses);
			let m = median(yeses);
			if (m == 0.01 && this.Contracts[0].BestBuyYesCost === null || this.Contracts[this.Contracts.length - 1] == null) {
				return true;
			} else {
				return false;
			}
		} else {
			if (this.Contracts[0].BestSellYesCost == null || this.Contracts[0].BestSellNoCost == null) {
				return true;
			} else {
				return false;
			}
		}
	}

	iconStatus() {
		let yes = this.yesQuality();
		let no = this.noQuality();
		return yes.status.icon + ' ' + no.status.icon;
	}

	shortStatusText() {
		let yes = this.yesQuality();
		let no = this.noQuality();
		return yes.status.icon + ' ' + no.status.icon + ' ' + this.Name;
	}

	longStatusText() {
		let yes = this.yesQuality();
		let no = this.noQuality();
		return this.Name + '\n' + yes.status.instruction + ' Yes / ' + no.status.instruction + ' No';
	}

	aggregateStatusValue() {
		let yes = this.yesQuality();
		let no = this.noQuality();

		return yes.status.value + no.status.value;
	}

	yesQuality() {
		if (this.Contracts.length < 2) {
			return new Quality(this);
		}

		let costs = this.Contracts.map((c) => {
			return c.BestBuyYesCost;
		});
		if (Constants.DEBUG) { console.log('Yes costs: ',costs); }

		let totalSpent = -1;
		if (this.allowNull()) {
			totalSpent = costs.reduce((prev,current) => {
				current = current || 1;
				return prev + current;
			});
		} else {
			totalSpent = costs.includes(null)? NaN : costs.reduce((prev,current) => {
				return prev + current;
			});
		}

		if (Constants.DEBUG) { console.log('Yes total spent: $' + totalSpent.toFixed(2)); }

		if (isNaN(totalSpent)) {
			if (Constants.DEBUG) { console.log('Some yes contracts have no available shares.  Bailing.'); }
			return new Quality(this);
		}

		let totalPercent = null,
			highestPotentialPercent = null,
			lowestPotentialPercent = null,
			profits = [];

		for (let contract of this.Contracts) {
			let cost = contract.BestBuyYesCost;
			if (cost === null || cost === undefined) {
				cost = 1.0;
			}

			let spent = totalSpent - cost;
			let profit = ((1-cost)*.9) - spent;

			let percentGainOrLoss = profit * 100.0;
			if (percentGainOrLoss == -0) {
				percentGainOrLoss = 0.00;
			}
			profits.push(percentGainOrLoss);

			totalPercent = totalPercent === null? percentGainOrLoss : totalPercent + percentGainOrLoss;

			if (highestPotentialPercent == null) {
				highestPotentialPercent = percentGainOrLoss;
			} else if (percentGainOrLoss > highestPotentialPercent) {
				highestPotentialPercent = percentGainOrLoss;
			}

			if (lowestPotentialPercent == null) {
				lowestPotentialPercent = percentGainOrLoss;
			} else if (percentGainOrLoss < lowestPotentialPercent) {
				lowestPotentialPercent = percentGainOrLoss;
			}

			if (Constants.DEBUG) { console.log('Yes ' + contract.Name + ': percentGainOrLoss=' + percentGainOrLoss.toFixed(2)); }
		}

		return new Quality(this, profits);
	}

	noQuality() {
		if (this.Contracts.length < 2) {
			return new Quality(this);
		}

		let costs = this.Contracts.map((c) => {
			return c.BestBuyNoCost;
		});
		if (Constants.DEBUG) { console.log('No costs: ',costs); }

		let totalSpent = 0;
		if (this.allowNull()) {
			totalSpent = costs.reduce((prev,current) => {
				current = current || 1;
				return prev + current;
			});
		} else {
			totalSpent = costs.includes(null)? NaN : costs.reduce((prev,current) => {
				return prev + current;
			});
		}

		if (Constants.DEBUG) { console.log('No total spent: $' + totalSpent.toFixed(2)); }

		if (isNaN(totalSpent)) {
			if (Constants.DEBUG) { console.log('Some no contracts have no available shares.  Bailing.'); }
			return new Quality(this);
		}

		let totalPercent = null,
			highestPotentialPercent = null,
			lowestPotentialPercent = null,
			profits = [];

		// Iterate through each contract in the linked market; this value will be treated as
		// the "yes" (no payout) entry when adding up potential gains.
		for (let contract of this.Contracts) {
			let total = 0;
			let cost = contract.BestBuyNoCost;

			// Iterate through each contract again, adding up the potential gain, skipping the
			// "contract" value to simulate the "yes" not paying out.
			for (let c of this.Contracts) {
				if (c.ID !== contract.ID) {
					let profit = (1.0 - c.BestBuyNoCost) * 0.9;
					total += profit;
				}
			}

			// subtract the amount you would spend on the "yes" that would be lost
			let realTotal = total - cost;

			// calculate a percentage
			let percentGainOrLoss = realTotal*100.0;
			if (percentGainOrLoss == -0) {
				percentGainOrLoss = 0.00;
			}
			profits.push(percentGainOrLoss);

			if (Constants.DEBUG) { console.log("No " + (contract.Name) + " (" + cost + "):" + percentGainOrLoss.toFixed(2) + "%"); }

			totalPercent = totalPercent === null? percentGainOrLoss : totalPercent + percentGainOrLoss;

			if (highestPotentialPercent == null) {
				highestPotentialPercent = percentGainOrLoss;
			} else if (percentGainOrLoss > highestPotentialPercent) {
				highestPotentialPercent = percentGainOrLoss;
			}

			if (lowestPotentialPercent == null) {
				lowestPotentialPercent = percentGainOrLoss;
			} else if (percentGainOrLoss < lowestPotentialPercent) {
				lowestPotentialPercent = percentGainOrLoss;
			}

			if (Constants.DEBUG) { console.log('No ' + contract.Name + ': percentGainOrLoss=' + percentGainOrLoss.toFixed(2)); }
		}

		return new Quality(this, profits);
	}
}