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

            $(".nav,cd__headline-text,cd__headline-icon,cd__pre-headline,img").css({
              "filter":"blur(2px)"
          });


            $(".main").css({
              "position":"absolute",
              "background":"linear-gradient(90deg, #39b2b8, #6ac28a)",
              "left":"150px",
              "color":"white"
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
                      "left": Math.min(scrollPX*4, 380) + "px"
                    });
                }else{
                    $("#exercises").css({
                      "left": 0 + "px"
                    });
                }
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
                "filter":"hue-rotate(140deg)"
              });
            });

        });


        //YOUR CODE GOES HERE!


    })();

}

})();
