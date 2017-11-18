$(document).ready(function(){

	// get window width and height
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	// random number function
	function randomNum(m,n) {

		//minumum number
		m = parseInt(m);

		//maximum number
		n = parseInt(n);

		// get a random number
		return Math.floor( Math.random() * (n - m + 1) ) + m;
	}

	for(var n = 1; n < 8; n++){

		// get a random yPos between 1 and the window width
		var xPos = randomNum(1, windowWidth);

		// get a random xPos between 1 and the window height
		var yPos = randomNum(1, windowHeight);

		// using the style attribute randomly place the div within the window
		$('body').append('<div class="element-'+n+'" style="left: '+xPos+'px; top: '+yPos+'px;">'+n+'</div>');
	}


});
