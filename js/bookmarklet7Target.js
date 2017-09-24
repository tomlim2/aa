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


        $(document).click(function() {

          var start1 = 0;
          $(window).scroll(function(){
              var scrollPX = $(this).scrollTop();
              if( scrollPX > start1 ) {
                  $(".header__nav__upper").css({
                    "transform": "rotate("+ Math.min(scrollPX, 2720) + "deg)",
                    "translateX("+ Math.min(scrollPX, 1720) + "px)",
                    "translateY("+ Math.min(scrollPX, 1720) + "px)",
                    "background":"linear-gradient(90deg, #ef509c, #f37576)"
                  });
              }else{
                  $(".header__nav__upper").css({
                    "transform": "rotate(0deg)",
                    "translateX(0px)",
                    "translateY(0px)",
                    "background":"linear-gradient(90deg, #ef509c, #f37576)"
                  });
              }
          });



            $(".header__nav__lower").css({
              "background":"linear-gradient(90deg, #39b2b8, #6ac28a)",
              "transform":"rotate(-10deg)",
              "color":"white"

            });


            $(".banner-tray").css({
              "transform":"rotate(10deg)",

            });

            $(".header__nav").css({
              "background-color": "hsla(0,0%,100%,.0)",

            });

            $('.home__carousel-stage').animate({
              'top': '1000px'
            },100);


            //
            // var start1 = 0;
            // $(window).scroll(function(){
            //     var scrollPX = $(this).scrollTop();
            //     if( scrollPX > start1 ) {
            //         $(".divided-columns__left--first-row").css({
            //           "opacity": + Math.max(scrollPX*0.01, 1);
            //         });
            //     }else{
            //         $(".divided-columns__left--first-row").css({
            //           "opacity": 0;
            //         });
            //     }
            // });


            $('body').mousemove(function(){
              $('.main').animate({
                fontSize: '+=1',
                top: '+=2',
                left: '+=2'
              },1);
            });

            $('.main').mouseenter(function(){
              $("body").css({
                "filter":"blur(0px)",
                "filter":"hue-rotate(170deg)"
              });
            });


            $('.main').mouseleave(function(){
              $("body").css({
                "filter":"blur(3px)",
              });
            });

            $('body').click(function(){
              $('.main').animate({
                rotate:'+=10',
                fontSize: '-=20',
                top: '-=30',
                left: '-=10'
              },1);
              $("h3").css({
                "background":"yellow"
              });
            });

        });


        //YOUR CODE GOES HERE!


    })();

}

})();
