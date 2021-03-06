'use strict';
var c = document.querySelector('canvas'),
    ctx = c.getContext('2d'),
    width = 200,
    height = 100,
    RAD = Math.PI / 180;

c.width = width;
var hw = width/2;
c.height = height;
var hh = height/2;

ctx.font = 'normal 10px courier';
ctx.fillRect(0, 0, width, height);
ctx.strokeStyle = '#FFEB3B';

var guid = 0;
function Frame(speed) {
  this.pos = 0.01;
  this.speed = 1 + speed/100;
  this.guid = ++guid;
  return this;
}

Frame.prototype = {
  draw: function () {
    var scale = this.pos;
    var w = width;
    var h = height * 2.1;
    var x = (w / 2 - w/2*scale);
    var y = (height / 2 - height/2*scale*2.1);

    ctx.moveTo(x, y);
    ctx.lineTo(x, y + h*scale);
    ctx.lineTo(x + width*scale, y + h*scale);
    ctx.lineTo(x + width*scale, y);
  },
  update: function () {
    this.pos = this.pos * this.speed;
  },
  finished: function () {
    return width / 2 - width/2*this.pos < 0;
  },
};

var boxes = [];

function radians(a) {
  return a * RAD;
}

function square(angle) {
  ctx.save();
  ctx.translate(width/2, height/2);
  ctx.rotate(radians(angle));
  ctx.translate(-width/2, -height/2);
  /* criss cross...gunna make you... */
  // top-left -> bottom-right
  ctx.moveTo(0,0);
  ctx.lineTo(width, height);
  ctx.stroke();
  ctx.restore();
}

function init() {
  ctx.fillRect(0, 0, width, height);
  ctx.lineWidth = 1;

  ctx.save();
  square(20);
  square(2);
  square(-16);
  square(-36);
  square(-55);
  square(-73);

  ctx.restore();
}

function pad(s, length) {
  var clen = (s+'').length;
  return '0'.repeat(length - clen) + s;
}

function text() {
  var d = Date.parse('2015-07-04T10:00:00');
  var t = pad(((Date.now() - d) / 1000).toFixed(0), 8);
  var textWidth = ctx.measureText(t+'');
  ctx.fillText(t, width/2 - textWidth.width/2, 15);
}

function paintToBack() {
  var data = c.toDataURL('image/png');
  c.style.background = 'url(' + data + ')';
  ctx.clearRect(0,0,width,height);
}

var tick = 0;

var speed = 15;

var prevFrameTime = 0;
function draw(elapsedTime) {
  var timeSinceLastFrame = elapsedTime - (prevFrameTime || 0);
  window.requestAnimationFrame(draw);

  if (timeSinceLastFrame < 30 && prevFrameTime) {
    return;
  }

  tick++;

  prevFrameTime = elapsedTime;

  ctx.clearRect(0,0,width,height);
  text();
  var spread = 6;

  if (tick % speed === 0) {
    var f = new Frame(spread);
    boxes.push(f);
  }


  // boxes
  var i = 0, length = boxes.length;
  for (i = 0; i < length; i++) {
    boxes[i].update();
  }

  i = 0;
  while (boxes[i]) {
    if (boxes[i].finished()) {
      boxes.splice(i, 1);
    } else {
      i++;
    }
  }

  // do a single draw from multiple paths
  ctx.beginPath();
  for (i = 0; i < boxes.length; i++) {
    boxes[i].draw();
  }
  ctx.stroke();
  ctx.closePath();
}

ctx.imageSmoothingEnabled = false;
init();
paintToBack();
ctx.fillStyle = '#FFEB3B';
ctx.lineWidth = 2;
draw();
