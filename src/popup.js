import 'babel-polyfill';

import h from 'virtual-dom/h'
import vdom from 'virtual-dom'
import main from 'main-loop'

import {Market} from './Market';

function marketClicked(market) {
	console.log('market clicked: ' + market.longStatusText());
	window.open(market.URL);
}

function render(state) {
	console.log('render: state=',state);
	let rows = [
		h('tr', [
			h('th', ['']),
			h('th', ['Name']),
			h('th', ['Buy Yes']),
			h('th', ['Buy No'])
		])
	];

	state.markets.forEach((market) => {
		var yesQuality = market.yesQuality();
		var noQuality = market.noQuality();
		var yesImage = '/img/' + yesQuality.status.image;
		var noImage  = '/img/' + noQuality.status.image;

		var bestStatus = [yesQuality.status, noQuality.status].sort(function(a, b) {
			return b.value  - a.value;
		})[0];

		rows.push(
			h('tr', [
				h('td', {
					attributes: {
						class: 'status-' + bestStatus.label
					}
				}, '\u00A0'),
				h('td', [
					h('a', {
						href: market.URL,
						attributes: {
							class: 'status-link'
						},
						onclick: function() {
							marketClicked(market);
						}
					}, market.Name)
				]),
				h('td', [
					h('a', {
						href: market.URL,
						attributes: {
							class: 'status-link'
						},
						onclick: function() {
							marketClicked(market);
						}
					}, [
						h('img', {
							src: yesImage,
							attributes: {
								class: 'status-icon',
								width: '32', height: '32'
							}
						})
					])
				]),
				h('td', [
					h('a', {
						href: market.URL,
						attributes: {
							class: 'status-link'
						},
						onclick: function() {
							marketClicked(market);
						}
					}, [
						h('img', {
							src: noImage,
							attributes: {
								class: 'status-icon',
								width: '32',
								meight: '32'
							}
						})
					])
				])
			])
		);
	});

	return h('table', {
		attributes: {
			cellspacing: 0
		}
	}, rows);
}

var loop = main({ markets: [], matched: [] }, render, vdom);
document.querySelector('#root').innerHTML = '';
document.querySelector('#root').appendChild(loop.target);

/*
var tree = render();
var rootNode = vdom['create-element'](tree);
document.body.appendChild(rootNode);
*/
function handleChanges(changes) {
	console.log('changes received:', changes);

	var updates = {
		markets: [],
		matched: []
	};

	if (changes.markets) {
		if (changes.markets.newValue) {
			updates.markets = changes.markets.newValue;
		} else {
			updates.markets = changes.markets;
		}
	}
	if (changes.matched) {
		if (changes.matched.newValue) {
			updates.matched = changes.matched.newValue;
		} else {
			updates.markets = changes.markets;
		}
	}

	for (let i=0, len=updates.markets.length; i < len; i++) {
		updates.markets[i] = new Market(updates.markets[i]);
	}
	for (let i=0, len=updates.matched.length; i < len; i++) {
		updates.matched[i] = new Market(updates.matched[i]);
	}

	loop.update(updates);
}

chrome.storage.local.get(['markets', 'matched'], (items) => {
	handleChanges(items);
});

chrome.storage.onChanged.addListener((changes, namespace) => {
	handleChanges(changes);
});
