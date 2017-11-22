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

    var color = ["#D4F7DC","#DBE7B4","#DBC092","#E0846D","#F51441"];
    var color2 = ["#F2E8C4","#98D9B6","#3EC9A7","#2B879E","#616668"];
    var randomColor = Math.floor(Math.random() * 5);

    return color[randomColor];
  };



  /* helpers to draw */

  var drawRandomRectangle = function(){
    var pos = getRandomPosition();
    var radiusX = getRandomNumber(40,200);
    var radiusY = getRandomNumber(40,200);

    ctx.beginPath();
    ctx.fillStyle = getRandomColor();
    ctx.arc(pos.x, pos.y, radiusX, radiusY, 270, 100, 2 * Math.PI);
    // ctx.fill();

    ctx.lineWidth= getRandomNumber(10,60);
    ctx.stroke();
    ctx.strokeStyle=getRandomColor();

  };

  var drawRandomArc = function(){
    var pos = getRandomPosition();
    var radiusX = getRandomNumber(40,200);
    var radiusY = getRandomNumber(40,200);

    ctx.beginPath();
    ctx.fillStyle = getRandomColor();
    ctx.arc(pos.x, pos.y, radiusX, radiusY, 270, 100, 4 * Math.PI);
    // ctx.fill();

    ctx.lineWidth= getRandomNumber(10,60);
    ctx.stroke();
    ctx.strokeStyle=getRandomColor();

  };

  var drawRandomLine = function(){
    var pos = getRandomPosition();
    var radiusX = getRandomNumber(40,200);
    var radiusY = getRandomNumber(40,200);

    ctx.beginPath();

    ctx.arc(pos.x, pos.y, radiusX, radiusY, 180, 100, 2 * Math.PI);


    ctx.lineWidth= getRandomNumber(10,60);
    ctx.stroke();
    ctx.strokeStyle=getRandomColor();


  };

  var drawRandomImage = function(){
    console.log('img');
  };

  var drawRandomThing = function(){
    var rand = getRandomNumber(0, 2);
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
