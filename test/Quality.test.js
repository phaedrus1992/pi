import 'babel-polyfill';
import * as assert from 'assert';

import * as Constants from '../src/Constants';

import {Status} from '../src/Status';
import {Market} from '../src/Market';
import {Quality} from '../src/Quality';

describe('Quality', () => {
	describe('constructor()', () => {
		it('should create a Quality object with unknown status', () => {
			let q = new Quality(Constants.NO_MARKET_GOOD);
			assert.ok(q);
			assert.ok(Status.UNKNOWN.equals(q.status));
		});

		it('should create a Quality object with good status', () => {
			let q = new Quality(Constants.NO_MARKET_GOOD, [1,2,3,4]);
			assert.ok(q);
			assert.ok(Status.GOOD.equals(q.status));
			assert.equal(1, q.lowest);
			assert.equal(4, q.highest);
			assert.equal(2.5, q.average);
		});

		it('should create a Quality object with great status', () => {
			let q = new Quality(Constants.NO_MARKET_GOOD, [2,10]);
			assert.ok(q);
			assert.ok(Status.GREAT.equals(q.status));
			assert.equal(2, q.lowest);
			assert.equal(10, q.highest);
			assert.equal(6, q.average);
		});

		it('should create a Quality object with mixed status', () => {
			let q = new Quality(Constants.NO_MARKET_GOOD, [-1,2]);
			assert.ok(q);
			assert.ok(Status.MIXED.equals(q.status));
			assert.equal(-1, q.lowest);
			assert.equal(2, q.highest);
			assert.equal(0.5, q.average);
		});

		it('should create a Quality object with bad (but mixed) status', () => {
			let q = new Quality(Constants.NO_MARKET_GOOD, [-2,1]);
			assert.ok(q);
			assert.ok(Status.BAD.equals(q.status));
			assert.equal(-2, q.lowest);
			assert.equal(1, q.highest);
			assert.equal(-0.5, q.average);
		});

		it('should create a Quality object with awful status', () => {
			let q = new Quality(Constants.NO_MARKET_GOOD, [-10,-2]);
			assert.ok(q);
			assert.ok(Status.AWFUL.equals(q.status));
			assert.equal(-10, q.lowest);
			assert.equal(-2, q.highest);
			assert.equal(-6, q.average);
		});
	});
});
