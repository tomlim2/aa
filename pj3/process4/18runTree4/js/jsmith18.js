window.onload = function() {
	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		width = canvas.width = 1200,
		height = canvas.height = 800;

	var p0 = {
			x: width / 3,
			y: height - 50
		},
		p1 = {
			x: width / 3,
			y: 50
		},
		branchAngleA,
		branchAngleB,
		trunkRatio = 0.1,
		tA = Math.PI,
		tAS = 0.01,
		tB = 2,
		tBS = 0.01437;

    ctx.strokeStyle = 'black';

	start();

	function start() {
		ctx.clearRect(0, 0, width, height);
		branchAngleA = Math.cos(tA += tAS) * Math.PI / 20;
		branchAngleB = Math.cos(tB += tBS) * Math.PI / 2;

		tree(p0, p1, 6);
		requestAnimationFrame(start);
	}

	function tree(p0, p1, limit) {
		var dx = p1.x - p0.x,
			dy = p1.y - p0.y,
			dist = Math.sqrt(dx * dx + dy * dy),
			angle = Math.atan2(dy, dx),
			branchLength = dist * (1 - trunkRatio),
			pA = {
				x: p0.x + dx * trunkRatio,
				y: p0.y + dy * trunkRatio
			},
			pB = {
				x: pA.x + Math.cos(angle + branchAngleA) * branchLength,
				y: pA.y + Math.sin(angle + branchAngleA) * branchLength,
			},
			pC = {
				x: pA.x + Math.cos(angle + branchAngleB) * branchLength,
				y: pA.y + Math.sin(angle + branchAngleB) * branchLength,
			};

		ctx.beginPath();
		ctx.moveTo(p0.x, p0.y);
		ctx.lineTo(pA.x, pA.y);
		ctx.stroke();

		if(limit > 0) {
			tree(pA, pC, limit - 1);
			tree(pA, pB, limit - 1);
		}
		else {
			ctx.beginPath();
			ctx.moveTo(pB.x, pB.y);
			ctx.lineTo(pA.x, pA.y);
			ctx.lineTo(pC.x, pC.y);
			ctx.stroke();
		}
	}

};
