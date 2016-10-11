var default_options = {
	negativerisk_maxprice: 97,
	negativerisk_refresh: 10
};

function update_ui() {
	var maxprice = document.getElementById('maxprice');
	var maxpriceDisp = document.getElementById('maxpriceDisplay');
	var refresh = document.getElementById('refresh');
	var refreshDisp = document.getElementById('refreshDisplay');
	console.log('update_ui: maxprice=' + maxprice.value);
	console.log('update_ui: refresh=' + refresh.value);
	maxpriceDisp.innerHTML = maxprice.value;
	refreshDisp.innerHTML = refresh.value;
	document.getElementById('status').innerHTML = '';
}

function restore_options() {
	console.log('restore_options()');
	chrome.storage.sync.get(default_options, function(items) {
		document.getElementById('maxprice').value = items.negativerisk_maxprice;
		document.getElementById('refresh').value = items.negativerisk_refresh;
		console.log('restore_options: maxprice=' + items.negativerisk_maxprice);
		console.log('restore_options: refresh=' + items.negativerisk_refresh);
		update_ui();
	});
}

function save_options(quit) {
	if (quit === undefined) {
		quit = true;
	}
	var maxprice = document.getElementById('maxprice').value;
	var refreshTime = document.getElementById('refresh').value;
	console.log('save_options: maxprice=' + maxprice);
	console.log('save_options: refresh=' + refresh);
	chrome.storage.sync.set({
		negativerisk_maxprice: parseInt(maxprice, 10),
		negativerisk_refresh: parseInt(refreshTime, 10)
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
	document.getElementById('maxprice').value = default_options.negativerisk_maxprice;
	document.getElementById('refresh').value  = default_options.negativerisk_refresh;
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
	restore_options();
});
