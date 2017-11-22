(function(){

  /* init this trash */

  var $window = $(window);
  var $canvas = $('<canvas id="chill-vibes1" width="' + $window.width() + '" height="' + $window.height() + '">Your browser doesn\'t support canvas. Boo-hiss.</canvas>');
  $('body').prepend($canvas);
  var ctx = $canvas[0].getContext('2d');

  ctx.font="40px monospace";

  ctx.fillStyle='white';
  ctx.fillText("",30,300);


  /* helpers to randomize */

  var getRandomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRandomPosition = function(){
    var pos = {
      x: getRandomNumber(0, $window.width()),
      y: getRandomNumber(0, $window.height())
    };

    return pos;
  };

  var getRandomColor = function(){


    var color2 = ["#5CACC4","#8CD19D","#CEE879","#FCB653","#FF5254"];
    var randomColor = Math.floor(Math.random() * 5);

    return color2[randomColor];
  };



  /* helpers to draw */

  var drawRandomRectangle = function(){
    var pos = getRandomPosition();
    var width = getRandomNumber(10,40);
    var height = getRandomNumber(20,40);
    var degree = getRandomNumber(120,200);
    var randomNum = getRandomNumber(-200,200);
    var time = new Date();
    var sin = Math.sin(Math.PI / 2);
    var cos = Math.cos(Math.PI / 2);

    ctx.translate(randomNum, randomNum);


    for (var i = 0; i <= 2; i++) {

    ctx.fillStyle = getRandomColor();
    ctx.fillRect(0, 0, width, height);
    ctx.transform(cos, sin, -sin, cos, degree, degree);
  }

  ctx.setTransform(-1, 0, 0, 1, pos.x, pos.y);
  ctx.fillStyle = getRandomColor();
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  // ctx.shadowBlur    = 4;
  ctx.shadowColor   = getRandomColor();
  ctx.save();
  ctx.restore();
  };

  var drawRandomThing = function(){
    var rand = getRandomNumber(0, 0);
    switch( rand ){
      case 0: drawRandomRectangle();
              break;
      case 1: drawRandomArc();
              break;
      case 2: drawRandomLine();
              break;
      case 3: drawRandomImage();
              break;
    }
  };

  var draw1 = function() {
    drawVisual = requestAnimationFrame(draw1);
    analyser.getByteTimeDomainData(dataArray);

    drawRandomThing();
  };



  /* AUDIO GARBAGE */

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

  var onKeyDown1 = function(e){
    switch (e.keyCode) {
      case 74: // j
          playSong1();
          break;
    }
  };

  // var onKeyDown2 = function(e){
  //   switch (e.keyCode) {
  //     case 75: // j
  //         playSong2();
  //         break;
  //         stop.draw1();
  //
  //   }
  // };


  var playSong1 = function(){
    if ( midiBuffer && !playSound ) {
      playSound = audioCtx.createBufferSource();
      playSound.buffer = midiBuffer;
      playSound.connect(audioCtx.destination);
      playSound.start(0);
      analyser.fftSize = 2048;
      dataArray = new Uint8Array(analyser.fftSize);
      analyser.getByteTimeDomainData(dataArray);
      draw1();
    }

  };


  /* LET'S MAKE SOME GARBAGE ART */

  var playSound, dataArray;
  var midiBuffer = null;
  var audioURL = 'https://tomlim2.github.io/aa/pj3/assets/references/jsmith/js/07%20Botanic%20Panic.mp3';

  // web audio api turn upppp
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var audioCtx = new AudioContext();
  var analyser = audioCtx.createAnalyser();

  loadAudio(audioURL);
  window.addEventListener("keydown",onKeyDown1);

})()
