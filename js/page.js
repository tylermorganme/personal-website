var descriptions1 = [
	"Dancer",
	"Chef",
	"Reader",
	"Developer",
	"Lover",
	"Wino",
	"Connoisseur",
	"Tinkerer",
	"Thespian",
	"Miner",
	"Analyst",
	"Designer",
	"Artist",
	"Thinker",
	"Leader",
	"Advocate",
	"Technologist"
];

var toggleFallFade = function() {
	if ($(window).width() < 500) {
		enableFallFade = false;
	} else {
		enableFallFade = true;
		fallFade();
	}
}

var enableFallFade = true;

$(document).ready(function() {
  	toggleFallFade();
});


$(window).resize(function() {
  	toggleFallFade();
});

var desc = "";

function fallFade (){
	$( "#desc-1" ).animate({
	opacity: 0,
	top: "50px"
	}, 2000, function() {
		$( "#desc-1" ).css("top",0);
		desc = descriptions1[Math.floor(Math.random() * descriptions1.length)];
		$( "#desc-1" ).html(desc);
		$( "#desc-1" ).animate({
			opacity: 1},
			1000, function() {
			if (enableFallFade == true) {
				fallFade();
			} 
		});
	});
}
