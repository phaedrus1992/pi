var default_options = {
	negativerisk_maxprice: 97,
	negativerisk_refresh: 10,
	negativerisk_detailed: false,
	negativerisk_great: 5
};

function update_ui() {
	var maxprice = document.getElementById('maxprice');
	var maxpriceDisp = document.getElementById('maxpriceDisplay');
	var refresh = document.getElementById('refresh');
	var refreshDisp = document.getElementById('refreshDisplay');
	var great = document.getElementById('great');
	var greatDisp = document.getElementById('greatDisplay');
	var detailed = document.getElementById('detailed');
	console.log('update_ui: maxprice=' + maxprice.value);
	console.log('update_ui: refresh=' + refresh.value);
	console.log('update_ui: great=' + great.value);
	console.log('update_ui: detailed=' + detailed.checked);
	maxpriceDisp.innerHTML = maxprice.value;
	refreshDisp.innerHTML = refresh.value;
	greatDisp.innerHTML = great.value;
	document.getElementById('status').innerHTML = '';
}

function restore_options() {
	console.log('restore_options()');
	chrome.storage.sync.get(default_options, function(items) {
		document.getElementById('maxprice').value = items.negativerisk_maxprice;
		document.getElementById('refresh').value = items.negativerisk_refresh;
		document.getElementById('great').value = items.negativerisk_great;
		document.getElementById('detailed').checked = items.negativerisk_detailed;
		console.log('restore_options: maxprice=' + items.negativerisk_maxprice);
		console.log('restore_options: refresh=' + items.negativerisk_refresh);
		console.log('restore_options: great=' + items.negativerisk_great);
		console.log('restore_options: detailed=' + items.negativerisk_detailed);
		update_ui();
	});
}

function save_options(quit) {
	if (quit === undefined) {
		quit = true;
	}
	var maxprice = document.getElementById('maxprice').value;
	var refreshTime = document.getElementById('refresh').value;
	var great = document.getElementById('great').value;
	var detailed = document.getElementById('detailed').checked;
	console.log('save_options: maxprice=' + maxprice);
	console.log('save_options: refresh=' + refresh);
	console.log('save_options: great=' + great);
	console.log('save_options: detailed=' + detailed);
	chrome.storage.sync.set({
		negativerisk_maxprice: parseInt(maxprice, 10),
		negativerisk_refresh: parseInt(refreshTime, 10),
		negativerisk_great: parseInt(great, 10),
		negativerisk_detailed: !!detailed
	}, function() {
		console.log('save_options: complete');
		if (quit) {
			window.close();
		}
		update_ui();
		document.getElementById('status').innerHTML = 'Saved.';
	});
}

function reset_options() {
	document.getElementById('maxprice').value   = default_options.negativerisk_maxprice;
	document.getElementById('refresh').value    = default_options.negativerisk_refresh;
	document.getElementById('great').value      = default_options.negativerisk_great;
	document.getElementById('detailed').checked = default_options.negativerisk_detailed;
	save_options(false);
}

document.addEventListener('DOMContentLoaded', function() {
	console.log('DOM content loaded.');
	document.getElementById('save').addEventListener('click', save_options);
	document.getElementById('reset').addEventListener('click', reset_options);
	document.getElementById('maxprice').addEventListener('change', update_ui);
	document.getElementById('maxprice').addEventListener('input', update_ui);
	document.getElementById('refresh').addEventListener('change', update_ui);
	document.getElementById('refresh').addEventListener('input', update_ui);
	document.getElementById('great').addEventListener('change', update_ui);
	document.getElementById('great').addEventListener('input', update_ui);
	restore_options();
});
