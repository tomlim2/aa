$(document).ready(function() {
      var $window = $(window);
      var $canvas = $('<canvas id="forest" width="' + $window.width() + '" height="' + $window.height() + '">Your browser doesn\'t support canvas. Boo-hiss.</canvas>');
      $('body').prepend($canvas);
      $('body').css({"background-color": getRandomColors()});
			var canvas = document.getElementById('forest');


			if (canvas.getContext) {
			var ctx = canvas.getContext("2d");
					recursiveTree(ctx, 100, 405, 120, -Math.PI / 3, 13, 10);
          recursiveTree(ctx, 500, 405, 120, -Math.PI / 3, 13, 10);
          recursiveTree(ctx, 900, 405, 120, -Math.PI / 3, 13, 10);
				}
			});

      var getRandomColors = function(){
        var colors = ["#C7FCD7","#D9D5A7","#D9AB91","#E6867A","#ED4A6A"];
        var randomColors = Math.floor(Math.random() * 5);
        return colors[randomColors];
      };


var recursiveTree = function (ctx, startX, startY, length, angle, depth, branchWidth ) {
  	var rand = Math.random,
  		newLength, newAngle, newDepth, maxBranch = 3,
  		endX, endY, maxAngle = 10 * Math.PI / 10,
  		subBranches;







	ctx.beginPath();
	ctx.moveTo(startX,startY);
	endX = startX + length * Math.cos(angle);
	endY = startY + length * Math.sin(angle);
	// ctx.lineCap = 'round';
	ctx.lineWidth = branchWidth;
	ctx.lineTo(endX, endY);

	if (depth <= 2) {
		ctx.strokeStyle = getRandomColors();
	}
	else {
		ctx.strokeStyle = getRandomColors();
	}
	ctx.stroke();


	newDepth = depth - 1;

	if (!newDepth) {
		return;
	}

	subBranches = (rand() * (maxBranch - 1)) + 1;

	branchWidth *= 0.8;

	for ( var i = 0; i < subBranches; i++ ) {
		newAngle = angle + rand() * maxAngle - maxAngle * 0.2;
		newLength = length * (0.7 + rand() * 0.4);
		recursiveTree(ctx, endX, endY, newLength, newAngle, newDepth, branchWidth);
	}
};
