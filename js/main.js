// Global variables

var moveBird = document.getElementById('bird'),
	secondHand = document.getElementById('seconds'),
	minuteHand = document.getElementById('minutes'),
	hourHand = document.getElementById('hours');

setInterval(function () {

	// Save time to variables 

	var second = new Date().getSeconds(),
		minute = new Date().getMinutes() + new Date().getSeconds() / 60,
		hour = new Date().getHours() + new Date().getMinutes() / 60 + second / 3600;

	// Execute clock hands function

	secondCounter(secondHand, second, 6, 360);
	secondCounter(minuteHand, minute, 6, 360);
	secondCounter(hourHand, hour, 30, 720);

	// Clock hand function

	function secondCounter(handr, seconds, value, rotation) {
		handr.style.transition = "0.3s";
		handr.style.transform = "rotate(" + seconds * value + "deg)";
		if (seconds == 0) {
			handr.style.transform = "rotate(" + rotation + "deg)";
			setTimeout(function () {
				handr.style.transition = "none";
				handr.style.transform = "rotate(0deg)";
			}, 300);
			handr.style.transition = "0.3s";
		}
	}

	// Bird animation

	if (second == 0) {

		moveBird.classList.add('active');

		setTimeout(function () {
			moveBird.classList.remove('active');

		}, 1000)

	}

}, 1000);

// Generate second lines

var timeLines = document.getElementById('dial');

function createLines() {
	var Ausgabe = "";
	for (var i = 0; i < 180; i += 6) {
		Ausgabe = "<div class='line' style='transform:rotate(" + i + "deg);'>" + "<span></span>" + "<span></span></div>";
		timeLines.innerHTML += Ausgabe;
	}
}
createLines();

// Pendelum function

var img = document.querySelector('.pendulum'),
	start = 0;

function sine() {
	img.style.transform = "rotate(" + 20 * Math.sin(start) + "deg)";
	start += 0.05;
	setTimeout(sine, 1000 / 60)
}
sine();
