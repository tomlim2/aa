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

          //   $("body").css({
          //     "background":"linear-gradient(90deg, #ef509c, #f37576)",
          //     "transform":"rotate(10deg)",
          //     "color":"red",
          //     "filter":"blur(2px)"
          //
          // });


          var x = Math.floor(Math.random() * 256);
          var y = Math.floor(Math.random() * 256);
          var z = Math.floor(Math.random() * 256);
          var rColor1 = "rgb(" + x + "," + y + "," + z + ")";
          var rColor2 = "rgb(" + y + "," + z + "," + x + ")";

          $("body").css({

            "color": rColor1,
            "background-color" : rColor2,
          });



          $(document).mousemove(function(e){
            var xAxis = e.pageX;
            var yAxis = e.pageY;
            $('body').css({
              "transform": "rotate("+ yAxis + "deg)"
              + "scale("+ xAxis/1000 + ")",
              "background-color" : "rgb(" + xAxis + "," + yAxis/3 + "," + (xAxis*yAxis) /10 + ")"
            });
          });



            $("#exercises").css({
              "position":"absolute",
              "left":"0px"
            });




            var start1 = 0;
            $(window).scroll(function(){
                var scrollPX = $(this).scrollTop();
                if( scrollPX > start1 ) {
                    $("#exercises").css({
                      "transform": "rotate("+ Math.min(scrollPX, 720) + "deg)",
                      "left": Math.min(scrollPX*4, 380) + "px",
                      "filter":"hue-rotate("+ scrollPX +"deg)"
                    });
                    $("#projects").css({
                      "transform": "translateY("+ Math.max(-scrollPX, -600) + "px)",

                    });

                    $('body').click(function(){
                      $('.main').animate({
                        rotate:'+=10',
                        fontSize: '-=20',
                        top: '-=300',
                        left: '-=10'
                      },1);
                      $("h3").css({
                        "background":"yellow"
                      });
                    });

                }else{
                    $("#exercises").css({
                      "transform": "rotate(0deg)",
                      "left": 0 + "px"
                    });
                }
            });


            $('body').mousemove(function(){
              $('.main').animate({
                fontSize: '+=1',
                top: '+=1',
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

        });

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
        //
        // $(document).mousemove(function(e){
        //   var xAxis = e.pageX;
        //   var yAxis = e.pageY;
        //   $('.header__nav__lower').css({
        //     "transform": "rotate("+ xAxis + "deg)"
        //     + "scale("+ xAxis/100 + ")",
        //     "background":"red",
        //     "color": "lightgoldenrodyellow"
        //   });
        //
        //   $('.banner-tray').css({
        //     "transform": "rotate("+ yAxis + "deg)"
        //     + "scale("+ xAxis/100 + ")",
        //     "background":"yellow"
        //   });
        //
        // });

        //YOUR CODE GOES HERE!


    })();

}

})();
