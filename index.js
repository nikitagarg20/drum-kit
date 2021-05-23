var numberOfButtons =
	document.querySelectorAll(".btn").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".btn")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
});

function sound(key) {
switch (key) {
	case "w":
	var sound1 = new Audio("chime.wav");
	sound1.play();
	break;

	case "a":
	var sound2 = new Audio("drum.wav");
	sound2.play();
	break;

	case "s":
	var sound3 = new Audio('Drum.mp3');
	sound3.play();
	break;

	case "d":
	var sound4 = new Audio('flute.wav');
	sound4.play();
	break;

	case "j":
	var sound5 = new Audio('guitar.wav');
	sound5.play();
	break;

	case "k":
	var sound6 = new Audio('piano.wav');
	sound6.play();
	break;

	case "l":
	var sound7 = new Audio('tap.wav');
	sound7.play();
	break;

	default: console.log(key);
}
}

