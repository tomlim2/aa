
var $canvas = $('<canvas id="canvas"></canvas>');
$('body').prepend($canvas);


var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');


var stars=[];
var numStars=200;
var speed=1;
var getRandomColor = function(){

  var color = ["#FFB884","#F5DF98","#FFF8D4","#C0D1C2","#2E4347"];
  var color2 = ["#F2E8C4","#98D9B6","#3EC9A7","#2B879E","#616668"];
  var randomColor = Math.floor(Math.random() * 5);


  return color[randomColor];
};


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
	// Clear canvas
	ctx.clearRect(0,0,canvas.width,canvas.height);
	// Draw each star
	for (i=0;i<numStars;i++) {
		// Move the star first
		stars[i].x-=Math.pow(stars[i].distance,2)/canvas.width*speed;
		// If it's off-screen, reset it
		if (stars[i].x<=0) {
			stars[i]=makeStar();
			stars[i].x=1;
		}
		// Draw the star
		ctx.beginPath();
		ctx.arc(stars[i].x*canvas.width,stars[i].y*canvas.height,stars[i].distance*2,0,2*Math.PI,false);
		ctx.lineWidth=stars[i].distance*4;
		ctx.strokeStyle=getRandomColor();
		ctx.stroke();
		ctx.fillStyle=stars[i].color;
		ctx.fill();
	}
}

// Redraw the stars every 30 milliseconds
setInterval(function(){
	updateStars();
},24);
