(function (w) {
	var retries = 4;

	function calculate() {
		// Get the prices of each "No" option.
		var noList = $('#contractListTable .sharesDown > .sharesDown').filter(function(index, item) {
			// only get the "buy"s
			return item.id.indexOf("buy") === 0;
		}).text().split('¢').filter(function(item) {
			// Filter out options not currently traded, or costing more than $0.97.
			return !(item === '' || item.indexOf('None') > -1 || item >= 98); 
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
			setTimeout(calculate, 2000);
			retries--;
			return;
		}

		if (noList.length < 3) {
			console.log('Not a linked market.');
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

		var icon, mouseover, text = '';
		mouseover = 'lowest gain: ' + lowestPotentialPercent + '%\nhighest gain: ' + highestPotentialPercent + '%';

		if (lowestPotentialPercent > 0) {
			icon = '✅';
			text += '✅ Good bet!\n';
			text += 'Lowest Potential Gain:' + lowestPotentialPercent + '%\n';
			text += 'Highest Potential Gain:' + highestPotentialPercent + '%\n';
		} else if (highestPotentialPercent < 0) {
			icon = '❌';
			mouseover = 'lowest loss: ' + lowestPotentialPercent + '%\nhighest loss: ' + highestPotentialPercent + '%';
			text += '❌ Bad bet. :(\n';
			text += 'Lowest Potential Loss:' + lowestPotentialPercent + '%\n';
			text += 'Highest Potential Loss:' + highestPotentialPercent + '%\n';
		} else {
			icon = '😐';
			text += '😐 Mixed bet.\n';
			text += 'Lowest Potential Loss:' + lowestPotentialPercent + '%\n';
			text += 'Highest Potential Gain:' + highestPotentialPercent + '%\n';
		}

		console.log(text);

		var sharesHeader = $('#contractListTable .sharesHeader');
		var riskAnnotation = sharesHeader.find('.risk-annotation');
		if (!riskAnnotation || riskAnnotation.length == 0) {
			sharesHeader.find('a.glyphicons').after('<span class="risk-annotation" style="cursor: pointer" title="' + mouseover + '">' + icon + '</span>');
		} else {
			riskAnnotation.html(icon);
			riskAnnotation.attr('title', mouseover);
		}

		$('#contractListTable .sharesHeader a.glyphicons.refresh').click(function() {
			retries = 4;
			setTimeout(calculate, 2000);
		});
	}

	setTimeout(calculate, 2000);
})(window);