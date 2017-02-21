import 'babel-polyfill';
import {Market} from './Market';
import {MarketTracker} from './MarketTracker';
import moment from 'moment';

import beep from './beep';

console.log('background.js loaded');

var tracker = new MarketTracker();
var notified = {};

var snd = new Audio('data:audio/mp3;base64,' + beep);

var cb = (markets) => {
	console.clear();
	markets.sort((a,b) => {
		return b.aggregateStatusValue() - a.aggregateStatusValue();
	});

	let matched = [];
	for (let market of markets) {
		if (market.isLinked()) {
			let yes = market.yesQuality();
			let no  = market.noQuality();
			if (yes.status.value >=4 || no.status.value >= 4) {
				matched.push(market);
				let now = moment().format('HH:mm:ss');
				console.log(now + ' ' + yes.status.icon + ' ' + no.status.icon + ' [' + market.ID + '] ' + market.Name + ' ' + market.URL);
			}
		}
	}

	if (matched.length > 0) {
		let ding = false;

		for (let match of matched) {
			let notif = notified[match.ID] || 0;
			let aggregate = match.aggregateStatusValue();

			if (aggregate > notif) {
				let now = moment().format('HH:mm:ss');
				console.log('[' + match.ID + '] ' + match.Name + ' aggregate status increased: ' + notif + ' -> ' + aggregate);
				ding = true;
			}

			notified[match.ID] = aggregate;
		}

		if (ding) {
			snd.currentTime = 0;
			snd.play();
		}
	}
};

tracker.subscribe(cb);
tracker.start();

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener((tab) => {
	console.log('Hey, we got clicked!');
	//chrome.tabs.update(tab.id, {url: action_url});
});

window.tracker = tracker;