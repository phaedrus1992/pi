(function (w) {
	var retries = 4;
	var schedule;
	var default_options = {
		negativerisk_detailed: false,
		negativerisk_maxprice: 97,
		negativerisk_refresh: 10,
		negativerisk_great: 5,
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

	function updateAnnotation(icon, mouseover, label, text) {
		chrome.storage.sync.get(default_options? default_options : {}, function(items) {
			if (items.negativerisk_detailed) {
				updateDetailedAnnotation(icon, mouseover, label, text);
			} else {
				updateHeaderAnnotation(icon, mouseover, label, text);
			}
		});
	}

	function updateHeaderAnnotation(icon, mouseover, label, text) {
		var sharesHeader = $('#contractListTable .sharesHeader');
		var riskAnnotation = sharesHeader.find('#riskAnnotation');
		if (!riskAnnotation || riskAnnotation.length === 0) {
			sharesHeader.find('a.glyphicons').after('<span id="riskAnnotation" style="cursor: pointer" title="' + mouseover + '">&nbsp;' + icon + '&nbsp;</span>');
		} else {
			riskAnnotation.html('&nbsp;' + icon + '&nbsp;');
			riskAnnotation.attr('title', mouseover);
		}
		$('#riskDetails').remove();

		$('#contractListTable .sharesHeader a.glyphicons.refresh').click(function() {
			retries = 4;
			scheduleUpdate(2000);
		});
	}

	function updateDetailedAnnotation(icon, mouseover, label, text) {
		var detailedAnnotation = $('#riskDetails');
		var detail = mouseover.replace(/\n/g, '<br>');
		detail = '<span style="float: left; font-size: 200%; padding-right: 0.5em">' + icon + ' ' + label + '</span><p style="white-space: pre-wrap; display: inline">' + detail + '</p>';
		if (!detailedAnnotation || detailedAnnotation.length === 0) {
			$('#contractList div.panel.panel-default.activity').before('<div id="riskDetails">' + detail + '</div>')
		} else {
			detailedAnnotation.html(detail);
		}
		$('#riskAnnotation').remove();

		$('#contractListTable .sharesHeader a.glyphicons.refresh').click(function() {
			retries = 4;
			scheduleUpdate(2000);
		});
	}

	function update() {
		chrome.storage.sync.get(default_options? default_options : {}, function(items) {
			calculate(items.negativerisk_maxprice, items.negativerisk_great);
		});
	}

	function calculate(max, great) {
		console.log('Calculating negative risk.  Max acceptable price: ' + max + '¢');

		// Get the prices of each "No" option.
		var noList = $('#contractListTable .sharesDown > .sharesDown').filter(function(index, item) {
			// only get the "buy"s
			return item.id.indexOf("buy") === 0;
		}).text().split('¢').filter(function(item) {
			// Filter out options not currently traded, or costing more than <max>.
			return !(item === '' || item.indexOf('None') > -1 || item > max); 
		}).map(function (item, idx) {
			// normalize to dollars
			return parseInt(item) / 100.0;
		});

		if (retries === 0) {
			console.log('Out of retries.  Giving up.');
			return;
		}		

		if (noList.length === 0) {
			console.log('Not finished loading, retrying in 2 seconds.');
			scheduleUpdate(2000);
			retries--;
			return;
		}

		if (noList.length < 2) {
			console.log('Too few markets.');
			updateAnnotation('❓', 'Too few markets ' + max + '¢ or under to calculate negative risk.');
			retries = 0;
			return;
		}

		var highestPotentialPercent;
		var lowestPotentialPercent;

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
			var percentGainOrLoss = (realTotal*100).toFixed(2);
			if (percentGainOrLoss == -0) {
				percentGainOrLoss = 0.00;
			}

			console.log("Item " + (i+1) + "(" + noList[i] + "):" + percentGainOrLoss + "%");

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

		var icon, label, mouseover, text = '';
		mouseover = 'Lowest Potential Gain: ' + lowestPotentialPercent + '%\nHighest Potential Gain: ' + highestPotentialPercent + '%';

		if (lowestPotentialPercent >= great) {
			icon = '🤑';
			label = 'Great bet!';
			text += '🤑 Great bet!\n';
			text += 'Lowest Potential Gain:' + lowestPotentialPercent + '%\n';
			text += 'Highest Potential Gain:' + highestPotentialPercent + '%\n';
		} else if (lowestPotentialPercent > 0) {
			icon = '✅';
			label = 'Good bet!';
			text += '✅ Good bet!\n';
			text += 'Lowest Potential Gain:' + lowestPotentialPercent + '%\n';
			text += 'Highest Potential Gain:' + highestPotentialPercent + '%\n';
		} else if (highestPotentialPercent < 0) {
			icon = '❌';
			label = 'Bad bet.';
			mouseover = 'Lowest Potential Loss: ' + lowestPotentialPercent + '%\nHighest Potential Loss: ' + highestPotentialPercent + '%';
			text += '❌ Bad bet. :(\n';
			text += 'Lowest Potential Loss:' + lowestPotentialPercent + '%\n';
			text += 'Highest Potential Loss:' + highestPotentialPercent + '%\n';
		} else {
			icon = '😐';
			label = 'Mixed bet.';
			mouseover = 'Lowest Potential Loss: ' + lowestPotentialPercent + '%\nHighest Potential Gain: ' + highestPotentialPercent + '%';
			text += '😐 Mixed bet.\n';
			text += 'Lowest Potential Loss:' + lowestPotentialPercent + '%\n';
			text += 'Highest Potential Gain:' + highestPotentialPercent + '%\n';
		}

		console.log(text);
		updateAnnotation(icon, mouseover, label, text);

		chrome.storage.sync.get(default_options? default_options : {}, function(items) {
			var refreshTime = parseInt(items.negativerisk_refresh, 10);
			if (!refreshTime || isNaN(refreshTime)) {
				refreshTime = 10;
			}
			console.log('Refreshing again in ' + refreshTime + ' seconds.');
			scheduleUpdate(refreshTime * 1000);
		});
	}

	scheduleUpdate(2000);
})(window);