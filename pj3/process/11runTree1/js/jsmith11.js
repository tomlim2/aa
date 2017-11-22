$(document).ready(function() {
      var $window = $(window);
      var $canvas = $('<canvas id="forest" width="' + $window.width() + '" height="' + $window.height() + '">Your browser doesn\'t support canvas. Boo-hiss.</canvas>');
      $('body').prepend($canvas);
			var canvas = document.getElementById('forest');




			if (canvas.getContext) {
			var ctx = canvas.getContext("2d");
					recursiveTree(ctx, 600, 705, 110, -Math.PI / 2, 13, 10);
          recursiveTree(ctx, 100, 705, 80, -Math.PI / 2, 13, 10);
          recursiveTree(ctx, 1000, 705, 80, -Math.PI / 2, 13, 10);
				}
			});

var recursiveTree = function (ctx, startX, startY, length, angle, depth, branchWidth ) {
	var rand = Math.random,
		newLength, newAngle, newDepth, maxBranch = 3,
		endX, endY, maxAngle = 2 * Math.PI / 4,
		subBranches;


    var getRandomColor = function(){
      var color2 = ["#041122","#259073","#7FDA89","#C8E98E","#E6F99D"];
      var randomColor = Math.floor(Math.random() * 5);

      return color2[randomColor];
    };

	ctx.beginPath();
	ctx.moveTo(startX,startY);
	endX = startX + length * Math.cos(angle);
	endY = startY + length * Math.sin(angle);
	ctx.lineCap = 'round';
	ctx.lineWidth = branchWidth;
	ctx.lineTo(endX,endY);

	if (depth <= 2) {
		ctx.strokeStyle = getRandomColor();
	}
	else {
		ctx.strokeStyle = getRandomColor();
	}
	ctx.stroke();

	newDepth = depth - 1;

	if (!newDepth) {
		return;
	}

	subBranches = (rand() * (maxBranch - 1)) + 1;

	branchWidth *= 0.7;

	for ( var i = 0; i < subBranches; i++ ) {
		newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
		newLength = length * (0.7 + rand() * 0.3);
		recursiveTree(ctx, endX, endY, newLength, newAngle, newDepth, branchWidth);
	}
};
