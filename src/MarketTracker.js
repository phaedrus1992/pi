import {Market} from './Market';
import cloneDeep from 'lodash.clonedeep';

export class MarketTracker {
	constructor(refreshInterval=60000) {
		this.setRefreshInterval(refreshInterval);
		this.subscriptions = [];
	}

	setRefreshInterval(refreshInterval) {
		this.refreshInterval = refreshInterval;
	}

	start() {
		const self = this;
		this.stop();

		let doRefresh = () => {
			this.refreshMarkets().then((m) => {
				console.log('got ' + m.length + ' markets');
				self.markets = m;
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

	onUpdate() {
		let markets = cloneDeep(this.markets);
		for (let callback of this.subscriptions) {
			callback(markets);
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
						let markets = [];
						let resp = JSON.parse(request.response);
						if (resp.Markets && resp.Markets.length > 0) {
							for (let market of resp.Markets) {
								markets.push(new Market(market));
							}
							resolve(markets);
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