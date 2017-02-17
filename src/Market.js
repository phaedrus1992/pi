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

	isLinked() {
		return this.Contracts.length >= 2;
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

		let totalSpent = costs.includes(null)? NaN : costs.reduce((prev,current) => {
			return prev + current;
		});

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

		let totalSpent = costs.includes(null)? NaN : costs.reduce((prev,current) => {
			return prev + current;
		});

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