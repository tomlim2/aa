
var $canvas = $('<canvas></canvas>');
$('body').prepend($canvas);

var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var ctx = canvas.getContext("2d");

var TAU = 2 * Math.PI;

//animation

times = [];
function loop() {
  var startTime = performance .now();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  update();
  draw();
  times.push(performance.now() - startTime);
  if (times.length > 500) {
    times.shift()
  }

  requestAnimationFrame(loop);
}

//color

var getRandomColor = function(){

  var color = ["#69D2E7","#A7DBD8","#E0E4CC","#F38630","#FA6900"];
  var color2 = ["#F2E8C4","#98D9B6","#3EC9A7","#2B879E","#616668"];
  var randomColor = Math.floor(Math.random() * 5);


  return color2[randomColor];
};

//draw

function Ball (startX, startY, startVelX, startVelY) {
  this.x = startX || Math.random() * canvas.width;
  this.y = startY || Math.random() * canvas.height;
  this.vel = {
    x: startVelX || Math.random() * 2 - 1,
    y: startVelY || Math.random() * 2 - 1
  };
  this.update = function(canvas) {
    if (this.x > canvas.width + 50 || this.x < -50) {
      this.vel.x = -this.vel.x;
    }
    if (this.y > canvas.height + 50 || this.y < -50) {
      this.vel.y = -this.vel.y;
    }
    this.x += this.vel.x;
    this.y += this.vel.y;
  };
  this.draw = function(ctx, can) {
    ctx.beginPath();
    if (distMouse(this) > 120) {
      ctx.fillStyle = "#2B879E";
      ctx.globalAlpha =  .2;
    } else {
        ctx.fillStyle = "#F2E8C4";
      ctx.globalAlpha =  0.8;
    }
    ctx.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, 30, 0, TAU, false);
    ctx.fill();
  }
}

var balls = [];
for (var i = 0; i < canvas.width * canvas.height / (65*65); i++) {
  balls.push(new Ball(Math.random() * canvas.width, Math.random() * canvas.height));
}

var lastTime = Date.now();
function update() {
  var diff = Date.now() - lastTime;
  for (var frame = 0; frame * 16.6667 < diff; frame++) {
    for (var index = 0; index < balls.length; index++) {
      balls[index].update(canvas);
    }
  }
  lastTime = Date.now();
}
var mouseX = -1e9, mouseY = -1e9;
document.addEventListener('mousemove', function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function distMouse(ball) {
  return Math.hypot(ball.x - mouseX, ball.y - mouseY);
}

function draw() {
  for (var index = 0; index < balls.length; index++) {
    var ball = balls[index];
    ball.draw(ctx, canvas);
    ctx.beginPath();
    for (var index2 = balls.length - 1; index2 > index; index2 += -1) {
      var ball2 = balls[index2];
    var dist = Math.hypot(ball.x - ball2.x, ball.y - ball2.y);
        if (dist < 100) {
          if (distMouse(ball) > 120) {
            ctx.strokeStyle = "#2B879E";
            ctx.globalAlpha = .2;
          } else {
            ctx.strokeStyle = "#98D9B6";
            ctx.globalAlpha =  0.8;
          }
          ctx.lineWidth = "10px";
          ctx.moveTo((0.5 + ball.x) | 0, (0.5 + ball.y) | 0);
          ctx.lineTo((0.5 + ball2.x) | 0, (0.5 + ball2.y) | 0);
        }
}
    ctx.stroke();
  }
}

//audio

var loadAudio = function(url) {
  var request = new XMLHttpRequest();
  request.open('GET', audioURL, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    audioCtx.decodeAudioData(request.response, function(buffer) {
      midiBuffer = buffer;
    });
  }
  request.send();
}


var playSong1 = function(){
  if ( midiBuffer && !playSound ) {
    playSound = audioCtx.createBufferSource();
    playSound.buffer = midiBuffer;
    playSound.connect(audioCtx.destination);
    playSound.start(0);

    loop();
  }

};

var playSound, dataArray;
var midiBuffer = null;
var audioURL = 'https://tomlim2.github.io/aa/pj3/new2jsmith%20/js/HighScore.mp3';


window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();

loadAudio(audioURL);



// Start

var onKeyDown1 = function(e){
  switch (e.keyCode) {
    case 74: // j
    playSong1();
    break;

  }
};


window.addEventListener("keydown",onKeyDown1);
