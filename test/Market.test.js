import 'babel-polyfill';
import * as assert from 'assert';

import * as Constants from '../src/Constants';
import {Quality} from '../src/Quality';
import {Status} from '../src/Status';
import {Market} from '../src/Market';

import jsdom from 'jsdom';
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

/*
import * as goodNoMarket from './data/no-good.json';
import * as questionableNoMarket from './data/no-questionable.json';
import * as badNoMarket from './data/no-bad.json';

import * as awfulYesMarket from './data/yes/awful.json';
*/

function assertQualityStatusIs(quality, status) {
	assert.ok(quality, 'quality should exist');
	assert.ok(status, 'status should exist');
	assert.ok(quality instanceof Quality, 'quality should be a Quality object');
	assert.ok(status instanceof Status, 'status should be a Status object');
	assert.ok(status.equals(quality.status), 'Quality status should be ' + status.label + ' but was ' + quality.status.label + ': ' + JSON.stringify(quality, null, 2));
}

describe('Market', () => {
	describe('constructor()', () => {
		it('should create a Market object', () => {
			let m = new Market(Constants.NO_MARKET_AWFUL);
			assert.ok(m);
			assert.equal(1, m.ID);
		});
	});

	describe('#yesQuality', () => {
		it('should return an "awful" result from this market', () => {
			let m = new Market(Constants.YES_MARKET_AWFUL);

			let yesQuality = m.yesQuality();
			assert.ok(yesQuality, 'Quality should exist.');
			assertQualityStatusIs(yesQuality, Status.AWFUL);
		});

		it('should return a "bad" result from this market', () => {
			let m = new Market(Constants.YES_MARKET_BAD);

			let yesQuality = m.yesQuality();
			assert.ok(yesQuality, 'Quality should exist.');
			assertQualityStatusIs(yesQuality, Status.BAD);
		});

		it('should return a "mixed" result from this market', () => {
			let m = new Market(Constants.YES_MARKET_MIXED);

			let yesQuality = m.yesQuality();
			assert.ok(yesQuality, 'Quality should exist.');
			assertQualityStatusIs(yesQuality, Status.MIXED);
		});

		it('should return a "good" result from this market', () => {
			let m = new Market(Constants.YES_MARKET_GOOD);

			let yesQuality = m.yesQuality();
			assert.ok(yesQuality, 'Quality should exist.');
			assertQualityStatusIs(yesQuality, Status.GOOD);
		});

		it('should return a "great" result from this market', () => {
			let m = new Market(Constants.YES_MARKET_GREAT);

			let yesQuality = m.yesQuality();
			assert.ok(yesQuality, 'Quality should exist.');
			assertQualityStatusIs(yesQuality, Status.GREAT);
		});
	});

	describe('#noQuality', () => {
		it('should return an "awful" result from this market', () => {
			let m = new Market(Constants.NO_MARKET_AWFUL);

			let noQuality = m.noQuality();
			assert.ok(noQuality, 'Quality should exist.');
			assertQualityStatusIs(noQuality, Status.AWFUL);
		});

		it('should return a "bad" result from this market', () => {
			let m = new Market(Constants.NO_MARKET_BAD);

			let noQuality = m.noQuality();
			assert.ok(noQuality, 'Quality should exist.');
			assertQualityStatusIs(noQuality, Status.BAD);
		});

		it('should return a "mixed" result from this market', () => {
			let m = new Market(Constants.NO_MARKET_MIXED);

			let noQuality = m.noQuality();
			assert.ok(noQuality, 'Quality should exist.');
			assertQualityStatusIs(noQuality, Status.MIXED);
		});

		it('should return a "good" result from this market', () => {
			let m = new Market(Constants.NO_MARKET_GOOD);

			let noQuality = m.noQuality();
			assert.ok(noQuality, 'Quality should exist.');
			assertQualityStatusIs(noQuality, Status.GOOD);
		});

		it('should return a "great" result from this market', () => {
			let m = new Market(Constants.NO_MARKET_GREAT);

			let noQuality = m.noQuality();
			assert.ok(noQuality, 'Quality should exist.');
			assertQualityStatusIs(noQuality, Status.GREAT);
		});
	});

	describe('#aggregateStatusValue', () => {
		it('should return unknown/unknown aggregate status', () => {
			let m = new Market(Constants.AGGREGATE_UU);
			assert.equal(2, m.aggregateStatusValue());
		});

		it('should return unknown/awful aggregate status', () => {
			let m = new Market(Constants.AGGREGATE_UA);
			assert.equal(3, m.aggregateStatusValue());
		});

		it('should return 2x "awful" aggregate status', () => {
			let m = new Market(Constants.AGGREGATE_AA);
			assert.equal(4, m.aggregateStatusValue());
		});
	});

	/*
	describe('#fromContractListHtml', () => {
		it('should parse an AJAX response correctly', () => {
			assert.ok(template.length > 0);
			let m = Market.fromContractListHtml(template);
		});
	});
	*/
});
