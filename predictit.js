(function (w) {
	var retries = 4;
	var schedule;
	var default_options = {
		negativerisk_detailed: false,
		negativerisk_yesrisk: false,
		negativerisk_maxprice: 97,
		negativerisk_refresh: 10,
		negativerisk_great: 5,
	};

	const COLORS = {
		no: 'red',
		yes: 'green'
	};

	const STATUSES = {
		unknown: {
			value: 1,
			icon: '❓',
			image: 'question.png',
			bgcolor: '#777',
			label: 'Unknown',
			instruction: "Don't Buy"
		},
		awful: {
			value: 2,
			icon: '💩',
			image: 'poop.png',
			bgcolor: '#bdb58e',
			label: 'Awful',
			instruction: "Don't Buy"
		},
		bad: {
			value: 3,
			icon: '❌',
			image: 'cross-mark.png',
			bgcolor: '#fdd',
			label: 'Bad',
			instruction: "Don't Buy"
		},
		mixed: {
			value: 4,
			icon: '😐',
			image: 'neutral-face.png',
			bgcolor: 'white',
			label: 'Mixed',
			instruction: "Don't Buy"
		},
		good: {
			value: 5,
			icon: '✅',
			image: 'check-mark.png',
			bgcolor: '#93d591',
			label: 'Good',
			instruction: "Buy"
		},
		great: {
			value: 6,
			icon: '🤑',
			image: 'money-face.png',
			bgcolor: '#6dd56a',
			label: 'Great',
			instruction: "Buy"
		}
	};

	function scheduleUpdate(wait) {
		if (schedule) {
			clearTimeout(schedule);
			schedule = null;
		}
		schedule = (function(time) {
			return setTimeout(update, time);
		})(wait);
	}

	function scheduleRefresh() {
		retries = 4;
		scheduleUpdate(2000);
	};

	function assertInjectionComplete(callback) {
		chrome.storage.sync.get(default_options || {}, function(options) {
			var headerAnnotation = $('#headerAnnotation');
			var detailedAnnotation = $('#detailedAnnotation');

			if (options.negativerisk_detailed) {
				//headerAnnotation.remove();
				if (!detailedAnnotation || detailedAnnotation.length === 0) {
					//$('#contractList div.panel.panel-default.activity').parent().before('<table id="detailedAnnotation"><tr><td id="detailedYes"></td><td>&nbsp;&nbsp;</td><td id="detailedNo"></td></tr></table>');
					$('#contractList div.panel.panel-default.activity').parent().after('<table id="detailedAnnotation" name="detailedAnnotation"><tr><td id="detailedYes"></td><td>&nbsp;&nbsp;</td><td id="detailedNo"></td></tr></table>');
				}
			} else {
				detailedAnnotation.remove();
			}
			var sharesHeader = $('#contractListTable .sharesHeader');
			if (!headerAnnotation || headerAnnotation.length === 0) {
				sharesHeader.find('a.glyphicons').after('<span id="headerAnnotation" style="cursor: pointer"><span id="headerYes" /> <span id="headerNo" /></span>');
			}

			var refreshElement = $('#contractListTable .sharesHeader a.glyphicons.refresh');
			if (refreshElement && refreshElement.length > 0) {
				var exists = false;
				var events = $._data(refreshElement[0], 'events');
				if (events && events.click) {
					$.each(events.click, function(index, ev) {
						if (ev.handler === scheduleRefresh) {
							exists = true;
						}
					});
				}

				if (exists) {
					console.log('refresh is already captured');
				} else {
					console.log('capturing refresh button');
					refreshElement.click(scheduleRefresh);
				}
			}

			if (callback) { callback(options); }
		});
	}

	function updateAnnotation(info, callback) {
		chrome.storage.sync.get(default_options || {}, function(options) {
			if (!options.negativerisk_yesrisk && info.type === 'yes') {
				console.log('Skipping "Yes" negative risk update.');
				$('#headerYes').html('');
				$('#detailedYes').html('');
			} else {
				info.options = options;
				if (options.negativerisk_detailed) {
					updateDetailedAnnotation(info);
				}
				updateHeaderAnnotation(info);
			}
			if (callback) { callback(options); }
		});
	}

	function getValue(status) {
		if (status && status.value > 0) {
			return status.value;
		}
		return 0;
	}

	function updateTitle(statuses) {
		console.log('updateTitle:',statuses);

		var el = document.querySelectorAll('head link[rel*="icon"]');

		// Remove existing favicons
		Array.prototype.forEach.call(el, function (node) {
		    node.parentNode.removeChild(node);
		});

		var icon;
		if (getValue(statuses.yes) > getValue(statuses.no)) {
			icon = statuses.yes.image;
		} else {
			icon = statuses.no.image;
		}

		icon = chrome.extension.getURL('/img/' + icon);

		// Create new favicon
		link      = document.createElement('link');
		link.type = 'image/x-icon';
		link.rel  = 'icon';
		link.href = icon;

		document.getElementsByTagName('head')[0].appendChild(link);

		/*
		var title = document.title;
		if (title.indexOf('PredictIt') > 0) {
			title = title.substring(2);
		}
		if (getValue(statuses.yes) > getValue(statuses.no)) {
			title = statuses.yes.icon + ' ' + title;
		} else if (statuses.no && statuses.no.icon) {
			title = statuses.no.icon + ' ' + title;
		}
		document.title = title;
		*/
	}

	function colorize(type, text) {
		return '<span style="color:' + COLORS[type] + '">' + text + '</span>';
	}

	function updateHeaderAnnotation(info) {
		//console.log('updateHeaderAnnotation:',info);
		assertInjectionComplete(function() {
			var typeDisplay = info.type.charAt(0).toUpperCase() + info.type.slice(1).toLowerCase();
			var el = $('#header' + typeDisplay);

			el.html('&nbsp;<span style="color:#777">' + typeDisplay + ':</span>&nbsp;' + info.status.icon + '&nbsp;');

			var mouseover = info.status.instruction + ' ' + typeDisplay + '\n';
			mouseover += 'Worst Potential Change: ' + info.low + '%\n';
			mouseover += 'Best Potential Change: ' + info.high + '%\n';
			mouseover += 'Average Potential Change: ' + info.average + '%';

			el.attr('title', mouseover);
		});
	}

	function updateDetailedAnnotation(info) {
		//console.log('updateDetailedAnnotation:',info);
		assertInjectionComplete(function() {
			var typeDisplay = info.type.charAt(0).toUpperCase() + info.type.slice(1).toLowerCase();
			var el = $('#detailed' + typeDisplay);

			var detail = '<table style="border:0;margin:0 5px;background-color:' + info.status.bgcolor + '">' +
				'<tr>' +
					'<td rowspan="3" style="font-size:150%;padding:1px 8px">' + info.status.icon + ' ' + info.status.instruction + ' ' + colorize(info.type, typeDisplay) + '</td>' +
					'<td style="padding:1px 5px">Worst Potential Change:' + '</td>' +
					'<td style="padding:1px 5px;text-align:right">' + info.low + '%</td>' +
				'</tr>' +
				'<tr>' +
					'<td style="padding:1px 5px">Best Potential Change:' + '</td>' +
					'<td style="padding:1px 5px;text-align:right">' + info.high + '%</td>' +
				'</tr>' +
				'<tr>' +
					'<td style="padding:1px 5px">Average Potential Change:' + '</td>' +
					'<td style="padding:1px 5px;text-align:right">' + info.average + '%</td>' +
				'</tr>' +
			'</table>';

			el.html(detail);
		});
	}

	function update(callback) {
		chrome.storage.sync.get(default_options || {}, function(options) {
			calculate(options.negativerisk_maxprice, options.negativerisk_great);
			if (callback) { callback(options); }
		});
	}

	function calculate(max, great) {
		console.log('Calculating negative risk.  Max acceptable price: ' + max + '¢');

		var yeses = [];
		var nos = [];

		var rows = $('#contractListTable tr');
		rows.each(function(index, el) {
			var up = $(el).find('span.sharesUp').first();
			var down = $(el).find('span.sharesDown').first();
			var price;

			var upa = $(up).find('a.sharesUp');
			if (upa && upa.length) {
				price = parseInt(upa.text().split('¢')[0],10);
			} else {
				price = parseInt(up.text().split('¢')[0],10);
			}
			if (!isNaN(price) && price <= max) {
				yeses.push(price);
				console.log('yes: ' + price);
			} else if (upa.text() === 'None') {
				console.log('yes: 100 (none)');
				yeses.push(100.0);
			} else {
				console.log('yes did not match: ' + price);
			}

			var downa = $(down).find('a.sharesDown');
			if (downa && downa.length) {
				price = parseInt(downa.text().split('¢')[0],10);
			} else {
				price = parseInt(down.text().split('¢')[0],10);
			}
			if (!isNaN(price) && price <= max) {
				nos.push(price);
				console.log('no: ' + price);
			} else {
				console.log('no did not match: ' + price);
			}

		});

		var yesList = yeses.map(function(item) {
			return item / 100.0;
		});
		var noList = nos.map(function(item) {
			return item / 100.0;
		});

		//console.log('YESes: ' , yesList);
		//console.log('NOs: ', noList);

		if (retries === 0) {
			console.log('Out of retries.  Giving up.');
			return;
		}		

		if (noList.length === 0 && yesList.length === 0) {
			console.log('Not finished loading, retrying in 2 seconds.');
			scheduleUpdate(2000);
			retries--;
			return;
		}

		if (noList.length < 2) {
			updateAnnotation({
				type: 'no',
				status: STATUSES.unknown,
				note: 'Too few markets ' + max + '¢ or under to calculate negative risk.'
			});
		}
		if (yesList.length < 2) {
			updateAnnotation({
				type: 'yes',
				status: STATUSES.unknown,
				note: 'Too few markets ' + max + '¢ or under to calculate negative risk.'
			});
		}

		if (noList.length < 2 && yesList.length < 2) {
			scheduleUpdate(2000);
			return;
		}

		var i, yesStatus, noStatus, average;
		var highestPotentialPercent = null;
		var lowestPotentialPercent = null;
		var totalPercent = null;

		///// PROCESS YES /////

		// Iterate through each entry in the linked market and add them up.  This is the total
		// spent.  Then iterate again, subtracting each entry from $1 to determine the profit
		// and apply the 10% fee to it, to calculate gain.

		var totalSpent = yesList.reduce(function(prev, current) {
			return prev + current;
		});
		console.log('Yes total spent: $' + totalSpent);
		for (i=0, len=yesList.length; i < len; i++) {
			var entry = yesList[i];
			var spent = totalSpent - entry;
			var profit = ((1-entry)*.9) - spent;

			var percentGainOrLoss = profit * 100.0;
			if (percentGainOrLoss == -0) {
				percentGainOrLoss = 0.00;
			}

			console.log("Yes " + (i+1) + "(" + yesList[i] + "):" + percentGainOrLoss + '%');

			if (totalPercent == null) {
				totalPercent = percentGainOrLoss;
			} else {
				totalPercent += percentGainOrLoss;
			}

			if (highestPotentialPercent == null) {
				highestPotentialPercent = percentGainOrLoss;
			} else if (percentGainOrLoss > highestPotentialPercent) {
				highestPotentialPercent = percentGainOrLoss;
			}

			if (lowestPotentialPercent == null) {
				lowestPotentialPercent = percentGainOrLoss;
			} else if (percentGainOrLoss < lowestPotentialPercent) {
				lowestPotentialPercent = percentGainOrLoss;
			}
		}

		yesStatus = STATUSES.unknown;

		average = (totalPercent / yeses.length).toFixed(2);
		console.log('Yes average: ' + average + '%');

		if (lowestPotentialPercent >= great) {
			yesStatus = STATUSES.great;
		} else if (lowestPotentialPercent > 0) {
			yesStatus = STATUSES.good;
		} else if (highestPotentialPercent < 0) {
			yesStatus = STATUSES.bad;
		} else if (average < 0) {
			yesStatus = STATUSES.bad;
		} else {
			yesStatus = STATUSES.mixed;
		}

		updateAnnotation({
			type: 'yes',
			status: yesStatus,
			average: average,
			low: lowestPotentialPercent.toFixed(2),
			high: highestPotentialPercent.toFixed(2)
		});

		///// PROCESS NO /////

		highestPotentialPercent = null;
		lowestPotentialPercent = null;
		totalPercent = null;

		// Iterate through each entry in the linked market; this value will be treated as
		// the "yes" (no payout) entry when adding up potential gains.
		for (i=0, len=noList.length; i < len; i++) { 
			var total = 0;

			// Iterate through each entry, adding up the potential gain, skipping the "i"
			// value to simulate the "yes" not paying out.
			for (j = 0; j < len; j++) {
				if (i !== j) {
					// add the current value to the potential total, taking out 10% for PredictIt
					total += (1-noList[j])*.9;
				}
			}

			// subtract the amount you would spend on the "yes" that would be lost
			var realTotal = total - noList[i];

			// calculate a percentage
			var percentGainOrLoss = realTotal*100.0;
			if (percentGainOrLoss == -0) {
				percentGainOrLoss = 0.00;
			}

			console.log("No " + (i+1) + "(" + noList[i] + "):" + percentGainOrLoss + "%");

			if (totalPercent == null) {
				totalPercent = percentGainOrLoss;
			} else {
				totalPercent += percentGainOrLoss;
			}

			if (highestPotentialPercent == null) {
				//console.log('setting highest to ' + percentGainOrLoss);
				highestPotentialPercent = percentGainOrLoss;
			} else if (percentGainOrLoss > highestPotentialPercent) {
				//console.log('replacing current highest (' + highestPotentialPercent + ') with ' + percentGainOrLoss)
				highestPotentialPercent = percentGainOrLoss;
			}

			if (lowestPotentialPercent == null) {
				//console.log('setting lowest to ' + percentGainOrLoss);
				lowestPotentialPercent = percentGainOrLoss;
			} else if (percentGainOrLoss < lowestPotentialPercent) {
				//console.log('replacing current lowest (' + lowestPotentialPercent + ') with ' + percentGainOrLoss)
				lowestPotentialPercent = percentGainOrLoss;
			}
		}

		noStatus = STATUSES.unknown;

		average = (totalPercent / yeses.length).toFixed(2);
		console.log('No average: ' + average + '%');

		if (lowestPotentialPercent >= great) {
			noStatus = STATUSES.great;
		} else if (lowestPotentialPercent > 0) {
			noStatus = STATUSES.good;
		} else if (highestPotentialPercent < 0) {
			noStatus = STATUSES.bad;
		} else if (average < 0) {
			noStatus = STATUSES.bad;
		} else {
			noStatus = STATUSES.mixed;
		}

		updateAnnotation({
			type: 'no',
			status: noStatus,
			average: average,
			low: lowestPotentialPercent.toFixed(2),
			high: highestPotentialPercent.toFixed(2)
		});

		updateTitle({
			yes: yesStatus,
			no: noStatus
		});

		chrome.storage.sync.get(default_options || {}, function(options) {
			var refreshTime = parseInt(options.negativerisk_refresh, 10);
			if (!refreshTime || isNaN(refreshTime)) {
				refreshTime = 10;
			}
			console.log('Refreshing again in ' + refreshTime + ' seconds.');
			scheduleUpdate(refreshTime * 1000);
		});
	}

	scheduleUpdate(2000);
})(window);