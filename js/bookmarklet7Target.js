console.log('Loaded 5target bookmarklet!!!');


javascript:(function(){


var v ="2.2.4"; // version of jquery we want to use

if (window.jQuery== undefined || window.jQuery.fn.jquery < v){

    var done = false;
    var script = document.createElement("script");
    script.src="http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js"; // load version of jQuery we specify
    script.onload = script.onreadystatechange = function(){

        if (!done && (!this.readyState || this.readyState=="loaded" || this.readyState =="complete")){

        done = true;
        initMyBookmarklet(); //If jquery is loaded now run my script

        }
    };
document.getElementsByTagName("head")[0].appendChild(script);


}else{
    initMyBookmarklet();
}

function initMyBookmarklet(){
    (window.myBookmarklet = function (){

        //YOUR CODE GOES HERE!


        $(document).ready(function() {

          var start1 = 0;
          var start2 = 200;
          $(window).scroll(function(){
              var scrollPX = $(this).scrollTop();

              if( scrollPX > start1 ) {


                  $('body,.zn,h1,h2,h3,p,a').css({
                    "filter":"hue-rotate("+ scrollPX +"deg)"
                  });

                  $(".header__nav__upper, .nav").css({
                    "transform": "rotate("+ scrollPX + "deg)"
                    + "translateX("+ Math.min(scrollPX, 100) + "px)"
                    + "translateY("+ Math.min(scrollPX, 100) + "px)"
                    + "scale("+ Math.min(1 + scrollPX/10000, 10) + ")",
                    "background":"yellow",
                    "filter":"hue-rotate("+ scrollPX +"deg)"
                  });

                  $('.header__nav__lower').css({
                    "transform": "rotate("+ - scrollPX + "deg)"
                    + "scale("+ (1 + scrollPX/5000) + ")",
                    "background":"red",
                    "color": "lightgoldenrodyellow",
                    "filter":"hue-rotate("+ scrollPX +"deg)"
                  });

                  $('.banner-tray').css({
                    "transform": "rotate("+ scrollPX + "deg)"
                    + "scale("+ (1 + scrollPX/5000) + ")",
                  });

                  $(".home__carousel-stage,img,.tile-container").css({
                    "transform": "rotate("+ scrollPX/3 + "deg)",
                  });

                  $(".home__locations").css({
                    "transform": "rotate("+ - scrollPX/2 + "deg)",
                  });

                  $(".page-section--wide").css({
                    "transform": "rotate("+ - scrollPX/4 + "deg)",
                  });

                  $("#events").css({
                    "transform": "rotate("+ scrollPX/2 + "deg)",
                  });

                  $("#store").css({
                    "transform": "rotate("+ - scrollPX/6 + "deg)",
                  });

                  $(".home__sponsors").css({
                    "transform": "rotate("+ scrollPX/3 + "deg)",
                  });

                  // if( scrollPX > start2 ) {
                  //     $(".home__locations").css({
                  //       "transform": "translateY("+ Math.max(200 + -scrollPX*1.6, -600) + "px)",
                  //
                  //     });
                  //
                  // }

              }
              else{

                  $(".header__nav__upper, #nav").css({
                    "transform": "rotate(0deg)"
                    + "translateX(0px)"
                    + "translateY(0px)",
                    "background":"yellow"
                  });

                  $('.header__nav__lower').css({
                    "transform": "rotate(0deg)"
                    + "scale(1)",
                    "background":"red",
                    "color": "lightgoldenrodyellow"
                  });

                  $('.banner-tray').css({
                    "transform": "rotate(0deg)"
                    + "scale(1)",
                    "background":"yellow"
                  });

              }
          });



          $(document).mousemove(function(e){
            var xAxis = e.pageX;
            var yAxis = e.pageY;
            $('body,#main,#body').css({
              "color": "rgb(" + yAxis/3 + "," + xAxis/3 + "," + (xAxis*yAxis) /10 + ")",
              "background-color" : "rgb(" + xAxis/4 + "," + (xAxis*yAxis)/20 + "," + yAxis/10 + ")",
            });
          });

          $(document).click(function(){
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var rColor1 = "rgb(" + x + "," + y + "," + z + ")";
            var rColor2 = "rgb(" + y + "," + z + "," + x + ")";
            var rColor3 = "rgb(" + z + "," + y + "," + x + ")";

            $('a,p,#main').css({
              "color": rColor1,
            });
            $('body,#body').css({
              "color": rColor2,
            });
            $('h1,h2,h3,h4').css({
              "color": rColor3,
            });
          });




            $(".header__nav").css({
              "background-color": "hsla(0,0%,100%,.0)",
            });

            //
            // $('.home__carousel-stage').animate({
            //   'top': '8000px'
            // },80000);



            //
            //
            // $('body').mousemove(function(){
            //   $('.main').animate({
            //     fontSize: '+=1',
            //     top: '+=2',
            //     left: '+=2'
            //   },1);
            // });
            //
            // $('.main').mouseenter(function(){
            //   $("body").css({
            //     "filter":"blur(0px)",
            //     "filter":"hue-rotate(170deg)"
            //   });
            // });
            //
            //
            // $('.main').mouseleave(function(){
            //   $("body").css({
            //     "filter":"blur(3px)",
            //   });
            // });
            //
            // $('body').click(function(){
            //   $('.main').animate({
            //     rotate:'+=10',
            //     fontSize: '-=20',
            //     top: '-=30',
            //     left: '-=10'
            //   },1);
            //   $("h3").css({
            //     "background":"yellow"
            //   });
            // });



        ////YOUR CODE GOES HERE!

        });


        //YOUR CODE GOES HERE!


    })();

}

})();
