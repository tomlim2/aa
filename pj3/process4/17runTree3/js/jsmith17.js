
      var $window = $(window);
      var $canvas = $('<canvas id="canvas-1" width="' + $window.width() + '" height="' + $window.height() + '">Your browser doesn\'t support canvas. Boo-hiss.</canvas>');
      $('body').prepend($canvas);



        var canvas = document.getElementById('canvas-1');
        // get a context to draw in
        var ctx = canvas.getContext('2d');

        function tick() {
          var now = new Date();
          var sec = now.getSeconds();
          var min = now.getMinutes();
          var hr  = now.getHours();
          // clear what was drawn in the previous frame
          canvas.width = canvas.width;
          // begin a new path: arc is a line instruction like lineTo






          ctx.save();

          // define the circle: position according to time, 50px radius

          ctx.beginPath();
          ctx.arc(((Math.sin(now))) / 100 + 200, ((Math.cos(sec))) * 100 + 200, 20, 4, 8 * Math.PI);

          ctx.arc(((Math.sin(now))) / 100 + 400, ((Math.cos(sec))) * 10 + 400, 10, 4, 8 * Math.PI);
          ctx.fillStyle = 'black';




          // draw the circle
          ctx.fill();
          // request a chance to draw the circle again as soon as possible
          requestAnimationFrame(tick);
        }
        tick();
