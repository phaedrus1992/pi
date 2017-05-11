import 'babel-polyfill';
import {Market} from './Market';
import {MarketTracker} from './MarketTracker';
import moment from 'moment';

import beep from './beep';

console.log('background.js loaded');

var tracker = new MarketTracker();
var notified = {};
var resolveNotified = {};

var snd = new Audio('data:audio/mp3;base64,' + beep);

var cb = (markets) => {
	//console.log('markets=',markets);
	markets.sort((a,b) => {
		return b.aggregateStatusValue() - a.aggregateStatusValue();
	});

	let matched = [];
	for (let market of markets) {
		if (market.isLinked()) {
			let yes = market.yesQuality();
			let no  = market.noQuality();
			let resolving = market.isResolving();
			if (yes.status.value >=4 || no.status.value >= 4 || resolving) {
				matched.push(market);
				let now = moment().format('HH:mm:ss');
				console.log(now + ' ' + yes.status.icon + ' ' + no.status.icon + ' [' + market.ID + '] ' + market.Name + ' ' + market.URL);
			}
		}
	}

	chrome.storage.local.set({
		markets: markets,
		matched: matched
	});

	if (matched.length > 0) {
		let notify = false;

		for (let match of matched) {
			let now = moment().format('HH:mm:ss');
			let notif = notified[match.ID] || 0;
			let aggregate = match.aggregateStatusValue();
			let resolved = match.isResolved();

			if (aggregate > notif && notif > 0) {
				console.log(now + ' [' + match.ID + '] ' + match.Name + ' aggregate status increased: ' + notif + ' -> ' + aggregate);
				notify = true;
				chrome.notifications.create('' + match.ID, {
					type: 'basic',
					iconUrl: 'icon.png',
					title: match.iconStatus(),
					message: match.longStatusText(),
					requireInteraction: true,
					buttons: [
						{ title: 'Ignore' },
						{ title: 'View' }
					]
				});
			} else if (aggregate < notif) {
				chrome.notifications.clear('' + match.ID);
			}
			notified[match.ID] = aggregate;

			if (resolved && !resolveNotified[match.ID]) {
				console.log(now + ' [' + match.ID + '] ' + match.Name + ' resolving.');
				notify = true;
				chrome.notifications.create('r-' + match.ID, {
					type: 'basic',
					iconUrl: 'icon.png',
					title: match.iconStatus(),
					message: 'RESOLVING: ' + match.Name,
					requireInteraction: true,
					buttons: [
						{ title: 'Ignore' },
						{ title: 'View' }
					]
				});

				resolveNotified[match.ID] = true;
			} else if (!resolved) {
				chrome.notifications.clear('r-' + match.ID);
				resolveNotified[match.ID] = false;
			}
		}

		if (notify) {
			snd.currentTime = 0;
			snd.play();
		}
	}
};

tracker.subscribe(cb);
//tracker.allowNull(true);
tracker.ignoreWho(true);
tracker.start();

chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
	let marketId = parseInt(notificationId, 10);
	if (buttonIndex === 0) {
		tracker.ignore(marketId);
	} else if (buttonIndex === 1) {
		var market = tracker.getMarket(marketId);
		if (market) {
			chrome.tabs.create({ url: market.URL });
		} else {
			console.warn('Unable to locate Market #' + marketId);
		}
	} else {
		console.warn('Uknown button index ' + buttonIndex);
	}
	chrome.notifications.clear(notificationId);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log('got message from ' + (sender.tab? 'content script ' + sender.tab.url : 'the extension:'), request);
});


// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener((tab) => {
	console.log('extension icon clicked');
});

window.tracker = tracker;