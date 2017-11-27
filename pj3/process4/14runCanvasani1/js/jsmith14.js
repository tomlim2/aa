
      var $window = $(window);
      var $canvas = $('<canvas id="canvas-1" width="' + $window.width() + '" height="' + $window.height() + '">Your browser doesn\'t support canvas. Boo-hiss.</canvas>');
      $('body').prepend($canvas);



        var canvas = document.getElementById('canvas-1');
        // get a context to draw in
        var ctx = canvas.getContext('2d');
        function tick() {
          // clear what was drawn in the previous frame
          canvas.width = canvas.width;
          // begin a new path: arc is a line instruction like lineTo

          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
          // clear what was drawn in the previous frame
          ctx.fillRect(0, 0, 1200, 1200);

          ctx.fillStyle = '#000';

          ctx.beginPath();

          // define the circle: position according to time, 50px radius
          ctx.arc(((Math.sin(new Date() / 1000) + 1) / 3) * 500 + 50, ((Math.cos(new Date() / 1000) + 3) / 5) * 500, 50, 2, 4 * Math.PI);
          ctx.restore();
          ctx.arc(((Math.sin(new Date() / 10000) + 1) / 3) * 400 + 150, ((Math.cos(new Date() / 1000) + 3) / 5) * 500 + 50, 50, 4, 8 * Math.PI);
          ctx.arc(((Math.sin(new Date() / 4000) + 1) / 3) * 400 + 150, ((Math.cos(new Date() / 400) + 3) / 10) * 500 + 50, 50, 8, 12 * Math.PI);
          ctx.arc(((Math.sin(new Date() / 400) + 1) / 3) * 400 + 350, ((Math.cos(new Date() / 300) + 3) / 10) * 500 + 350, 50, 12, 24 * Math.PI);
          ctx.arc(((Math.cos(new Date() / 2000) + 1) / 3) * 400 + 250, ((Math.sin(new Date() / 1000) + 3) / 5) * 500 + 50, 50, 16, 48 * Math.PI);
          ctx.arc(((Math.cos(new Date() / 100) + 1) / 3) * 400 + 850, ((Math.sin(new Date() / 100) + 3) / 5) * 500 + 50, 50, 20, 96 * Math.PI);
          ctx.arc(((Math.cos(new Date() / 200) + 1) / 30) * 400 + 150, ((Math.sin(new Date() / 200) + 3) / 50) * 500 + 50, 50, 24, 192 * Math.PI);
          ctx.arc(((Math.sin(new Date() / 200) + 1) / 30) * 400 + 950, ((Math.cos(new Date() / 200) + 3) / 50) * 500 + 50, 50, 28, 384 * Math.PI);
          ctx.arc((Math.sin(Date.now() / 1000) + 1) * 250 + 50,
          50 + Math.sin(Date.now() / 100) * 10,
          20, 0, 2 * Math.PI);
          // draw the circle
          ctx.fill();
          // request a chance to draw the circle again as soon as possible
          requestAnimationFrame(tick);
        }
        tick();
