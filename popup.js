function settingChanged() {
	var setting = this.value;
	var strTime = setting.toString()
	var s = strTime.split('.')
	var minutes = s[0];
	var seconds = s[1];
	var time = minutes * 60 * 1000 + seconds * 1000

	setTimeout(function run() {
		chrome.tabs.reload();
		setTimeout(run, time);
	}, time);

}

document.addEventListener('DOMContentLoaded', function () {
	var inputs = document.querySelectorAll('input');
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('change', settingChanged);
	}
});