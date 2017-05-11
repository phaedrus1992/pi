import 'babel-polyfill';
import * as assert from 'assert';

import {Contract} from '../src/Contract';

import {LoadLong} from '../data/LoadLong.js';
import {LoadShort} from '../data/LoadShort.js';

import jsdom from 'jsdom';
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

describe('Contract', () => {
	describe('constructor()', () => {
		it('should create a Contract object', () => {
			let c = new Contract({
				"BestBuyNoCost": 0.08,
				"BestBuyYesCost": 0.93,
				"BestSellNoCost": 0.07,
				"BestSellYesCost": 0.92,
				"DateEnd": "N/A",
				"ID": 4899,
				"Image": "https://az620379.vo.msecnd.net/images/Contracts/small_cd0bc5f3-c64f-46aa-8895-8d6f59137419.png",
				"LastClosePrice": 0.92,
				"LastTradePrice": 0.92,
				"LongName": "Will Neil Gorsuch be the next confirmed Supreme Court justice?",
				"Name": "Neil Gorsuch",
				"ShortName": "Gorsuch",
				"Status": "Open",
				"TickerSymbol": "GORSUCH.SCOTUS.NEXTJUSTICE",
				"URL": "https://www.predictit.org/Contract/4899/Will-Neil-Gorsuch-be-the-next-confirmed-Supreme-Court-justice"
			});

			assert.equal(0.08, c.BestBuyNoCost);
		});
	});

	describe('#_importLoadLong', () => {
		it('should parse an AJAX "LoadLong" response correctly', () => {
			assert.ok(LoadLong.length > 0);
			let m = new Contract();
			assert.ok(m._importLoadLong(LoadLong));
			assert.equal(5, m.BestBuyYesQuantity);
			assert.equal(0.18, m.BestBuyYesCost);
		});
	});

	describe('#_importLoadShort', () => {
		it('should parse an AJAX "LoadShort" response correctly', () => {
			assert.ok(LoadShort.length > 0);
			let m = new Contract();
			assert.ok(m._importLoadShort(LoadShort));
			assert.equal(500, m.BestBuyNoQuantity);
			assert.equal(0.94, m.BestBuyNoCost);
		});
	});

});
