var $window = $(window);
var $canvas = $('<canvas id="canvas"></canvas>');
$('body').prepend($canvas);


var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');


var stars=[];
var numStars=200;
var speed=0.9;

var getRandomNumber = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomColor = function(){
  var color = ["#9D7E79","#CCAC95","#9A947C","#748B83","#5B756C"];
  var randomColor = Math.floor(Math.random() * 5);

  return color[randomColor];
};


ctx.fillRect(0, 0, $window.width(), $window.height());
ctx.fillStyle = getRandomColor();
ctx.save();

function makeStar() {
	return {
		x: Math.random(),
		y: Math.random(),
		distance: Math.sqrt(Math.random()),
		color: getRandomColor()
	};
}

for (i=0;i<numStars;i++) {
	stars[i]=makeStar();
}


// Draw stars
function updateStars() {
  var randomNum1 = getRandomNumber(10,200);

	// Clear canvas
	ctx.clearRect(0,0,canvas.width,canvas.height);
	// Draw each star
	for (i=0;i<numStars;i++) {
		// Move the star first
		stars[i].y-=Math.pow(stars[i].distance,2)/canvas.width*speed;
		// If it's off-screen, reset it
		if (stars[i].y<=0) {
			stars[i]=makeStar();
			stars[i].y=1;
		}
		// Draw the star
		ctx.beginPath();
		ctx.arc(stars[i].x*canvas.width,stars[i].y*canvas.height,stars[i].distance*20,20,20*Math.PI,false);

		// ctx.lineWidth=stars[i].distance*3;


		ctx.fillStyle=stars[i].color;
		ctx.fill();
	}
}

// Redraw the stars every 30 milliseconds
setInterval(function(){
	updateStars();
},24);
