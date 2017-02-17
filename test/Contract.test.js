import 'babel-polyfill';
import * as assert from 'assert';

import {Contract} from '../src/Contract';

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
});
