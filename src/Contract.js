let reMatch = new RegExp('^(\\d+)');

function getNumber(text) {
	if (text) {
		let match = text.match(reMatch);
		if (match[1]) {
			return parseInt(match[1], 10);
		}
	}
	return NaN;
}

function getPercent(text) {
	let ret = getNumber(text);
	if (isNaN(ret)) {
		return ret;
	}
	return ret / 100.0;
}

export class Contract {
	constructor(data) {
		Object.assign(this, data);
	}

	loadShort() {
		const self = this;
		return new Promise((resolve,reject) => {
			let request = new XMLHttpRequest();
			request.open("GET", 'https://www.predictit.org/Trade/LoadShort?contractId=' + self.ID);
			request.setRequestHeader('Accept', '*/*');

			request.onload = () => {
				if (request.status === 200) {
					//console.log('Got 200 response: ' + request.response);
					self._importLoadShort(request.response);
					console.log('loadShort: ' + self.BestBuyNoQuantity);
					resolve(self);
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

	loadLong() {
		const self = this;
		return new Promise((resolve,reject) => {
			let request = new XMLHttpRequest();
			request.open("GET", 'https://www.predictit.org/Trade/LoadLong?contractId=' + self.ID);
			request.setRequestHeader('Accept', '*/*');

			request.onload = () => {
				if (request.status === 200) {
					//console.log('Got 200 response: ' + request.response);
					self._importLoadLong(request.response);
					console.log('loadLong: ' + self.BestBuyYesQuantity);
					resolve(self);
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

	_importLoadShort(responseText) {
		const self = this;
		let doc = document.implementation.createHTMLDocument("parse");
		doc.documentElement.innerHTML = responseText;

		let quantityElement = doc.getElementById('SellQuantity-1');
		let priceElement = doc.getElementById('SellPricePerShare-1');

		if (quantityElement && priceElement) {
			self.BestBuyNoQuantity = getNumber(quantityElement.innerHTML);
			self.BestBuyNoCost = getPercent(priceElement.innerHTML);
			return true;
		}
		return false;
	}

	_importLoadLong(responseText) {
		const self = this;
		let doc = document.implementation.createHTMLDocument("parse");
		doc.documentElement.innerHTML = responseText;

		let quantityElement = doc.getElementById('BuyQuantity-1');
		let priceElement = doc.getElementById('BuyPricePerShare-1');

		if (quantityElement && priceElement) {
			self.BestBuyYesQuantity = getNumber(quantityElement.innerHTML);
			self.BestBuyYesCost = getPercent(priceElement.innerHTML);
			return true;
		}
		return false;
	}
}