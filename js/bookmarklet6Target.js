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

            $("h2,img,.nav,.banner-text--natural,.cd__headline-text,.cd__headline-icon,.cd__pre-headline,.cd__content,.cd__status--breaking,.zn__column--idx-1,#bgExit,.img_ad").css({
              "filter":"blur(3px)"
          });

            $('h2,img,.nav,.banner-text--natural,.cd__headline-text,.cd__headline-icon,.cd__pre-headline,.cd__content,.cd__status--breaking,.zn__column--idx-1,#bgExit.img_ad').mouseenter(function(){
              $(this).css({
                "filter":"blur(0px)"
              });
            });


            $('h2,img,.nav,.banner-text--natural,.cd__headline-text,.cd__headline-icon,.cd__pre-headline,.cd__content,.cd__status--breaking,.zn__column--idx-1,#bgExit,.img_ad').mouseleave(function(){
              $(this).css({
                "filter":"blur(3px)",
              });
            });

        });


        //YOUR CODE GOES HERE!


    })();

}

})();
