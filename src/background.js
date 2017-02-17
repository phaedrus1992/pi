import 'babel-polyfill';
import {Market} from './Market';
import {MarketTracker} from './MarketTracker';

console.log('background.js loaded');

var tracker = new MarketTracker();

var cb = (markets) => {
	markets.sort((a,b) => {
		return b.aggregateStatusValue() - a.aggregateStatusValue();
	});
	for (let market of markets) {
		if (market.isLinked()) {
			let yes = market.yesQuality();
			let no  = market.noQuality();
			console.log(yes.status.icon + ' ' + no.status.icon + ' ' + market.Name + ' ' + market.URL);
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