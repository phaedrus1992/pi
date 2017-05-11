import {Market} from './Market';
import cloneDeep from 'lodash.clonedeep';

import * as Constants from './Constants';

export class MarketTracker {
	constructor(refreshInterval=60000) {
		this.setRefreshInterval(refreshInterval);
		this.subscriptions = [];
		this._ignored = [];
		this._allowNull = false;
		this._ignoreWho = false;
		this.markets = [];
	}

	setRefreshInterval(refreshInterval) {
		this.refreshInterval = refreshInterval;
	}

	start() {
		const self = this;
		this.stop();

		let doRefresh = () => {
			this.refreshMarkets().then((m) => {
				/*
				if (console.clear) {
					console.clear();
				}
				*/
				console.log('got ' + m.length + ' markets');
				self.markets = m.filter((market) => {
					if(self._ignored.indexOf(market.ID) >= 0) {
						return false;
					}
					if (self._ignoreWho && market.Name.indexOf("Who ") === 0) {
						return false;
					}
					return true;
				});
				self.markets.forEach((market) => {
					market.allowNull(self._allowNull);
				});
				self.onUpdate();
			}).catch((err) => {
				console.error('Failed to refresh markets: ' + err);
			});
		};

		// call it once immediately, then start the timer
		doRefresh();
		this.timer = window.setInterval(doRefresh, this.refreshInterval);
	}

	stop() {
		if (this.timer) {
			window.clearInterval(this.timer);
		}
	}

	allowNull(an) {
		if (an !== null && an !== undefined) {
			this._allowNull = an;
			if (this.markets && this.markets.length > 0) {
				for (let market of this.markets) {
					market.allowNull(an);
				}
			}
			this._ignored = [];
		}
		return this._allowNull;
	}

	ignoreWho(iw) {
		if (iw !== null && iw !== undefined) {
			this._ignoreWho = iw;
			this._ignored = [];
		}
		return this._ignoreWho;
	}

	getMarket(id) {
		for (let market of this.markets) {
			if (market.ID === id) {
				return market;
			}
		}
		return null;
	}

	subscribe(callback) {
		if (!this.subscriptions.includes(callback)) {
			this.subscriptions.push(callback);
		}
	}

	unsubscribe(callback) {
		if (this.subscriptions.includes(callback)) {
			this.subscriptions.splice(this.subscriptions.indexOf(callback), 1);
		}
	}

	getIgnored() {
		return this._ignored;
	}

	ignore(market) {
		if (Number.isInteger(market)) {
			this._ignored.push(market);
			console.log('Ignored market: ' + this.getMarket(market).Name);
		} else if (market && market.ID && Number.isInteger(market.ID)) {
			this._ignored.push(market.ID);
			console.log('Ignored market: ' + this.getMarket(market.ID).Name);
		} else {
			console.warn('Not sure how to ignore market:', market);
		}
	}

	unignore(market) {
		if (Number.isInteger(market)) {
			let m = this.getMarket(market);
			this._ignored.splice(this._ignored.indexOf(market), 1);
			if (m && m.Name) {
				console.log('Unignored market: ' + m.Name);
			} else {
				console.log('Unignored market: ' + market);
			}
		} else if (market && market.ID && Number.isInteger(market.ID)) {
			this._ignored.splice(this._ignored.indexOf(market.ID), 1);
			if (market.Name) {
				console.log('Unignored market: ' + market.Name);
			} else {
				console.log('Unignored market: ' + market.ID);
			}
		} else {
			console.warn('Not sure how to unignore market:', market);
		}
	}

	getYesCount(market) {
		const self = this;
		let m = market;

		if (Number.isInteger(market)) {
			m = self.getMarket(market);
		}

		return m.refreshLong().then(() => {
			return m.getYesSharesToBuy();
		});
	}

	getNoCount(market) {
		const self = this;
		let m = market;

		if (Number.isInteger(market)) {
			m = self.getMarket(market);
		}

		return m.refreshShort().then(() => {
			return m.getNoSharesToBuy();
		});
	}

	getStockCount(market) {
		const self = this;
		let m = market;

		if (Number.isInteger(market)) {
			m = self.getMarket(market);
		}

		return m.refreshContracts().then(() => {
			return {
				yes: m.getYesSharesToBuy(),
				no: m.getNoSharesToBuy()
			};
		});
	}

	onUpdate() {
		let self = this;
		for (let callback of self.subscriptions) {
			let m = cloneDeep(self.markets);
			callback(m);
		}
	}

	refreshMarkets() {
		return new Promise((resolve,reject) => {
			let request = new XMLHttpRequest();
			request.open("GET", 'https://www.predictit.org/api/marketdata/all/');

			request.onload = () => {
				if (request.status === 200) {
					try {
						console.log('Got 200 response');
						let m = [];
						let resp = JSON.parse(request.response);
						if (resp.Markets && resp.Markets.length > 0) {
							for (let market of resp.Markets) {
								m.push(new Market(market));
							}
							resolve(m);
						} else {
							console.log('Got a response, but not sure what to do with it:');
							console.log(request.response);
							reject('Unhandled response.')
						}
					} catch (err) {
						console.log('Got a response, but it wasn\'t JSON:');
						console.log(request.response);
						reject(err);
					}
				} else {
					console.log('Got an error response: ' + request.statusText);
					reject(Error(request.statusText));
				}
			};

			request.onerror = () => {
				reject(Error('Network Error.'));
			};

			request.send();
		});
	}
}