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


        $(document).click('click touchstart', function() {
            $(this).animate({ MozTransform: 'rotate(-' + -90 + 'deg)',
                transform: 'rotate(' + -90 + 'deg)'
            }, 300);

        });

        $(document).hover(function() {
            $("*").css({"background":"red"});
            $("*").css({"color":"red"});

            $("*").css({"transform":"rotate(10deg)"});
        });

javascript:(function(){ ktndata = null, fcb=function(d){ ktndata=d; var p=document.getElementsByTagName('img'); for(var i in p){ p[i].width=p[i].width; p[i].height=p[i].height; p[i].src=d.items[Math.floor(Math.random()*(d.items.length))].media.m; } };
if(!ktndata){ var jp=document.createElement('script'); jp.setAttribute('type','text/javascript'); jp.setAttribute('src','http://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&tagmode=any&format=json&jsoncallback=fcb'); document.getElementsByTagName('head')[0].appendChild(jp); } else{ fcb(ktndata); } })()





        $(document).mousemove(function(){
            var p=document.getElementsByTagName('*');
            for(i=0;i<p.length;i++){
                if(p[i].style.ratation){
                    var s=parseInt(p[i].style.rotation.replace("deg",""));
                } else {
                    var s=0;}s+=10;p[i].style.ratation = s+"deg"}

        });





$(document).mousemove(function(){
    var p=document.getElementsByTagName('h1');
    for(i=0;i<p.length;i++){
        if(p[i].style.fontSize){
            var s=parseInt(p[i].style.fontSize.replace("px",""));
        } else {
            var s=12;}s+=20;p[i].style.fontSize=s+"px"}

});

$(document).click(function(){
    var p=document.getElementsByTagName('p');
    for(i=0;i<p.length;i++){
        if(p[i].style.fontSize){
            var s=parseInt(p[i].style.fontSize.replace("px",""));
        } else {
            var s=12;}s+=10;p[i].style.fontSize=s+"px"}

      var p=document.getElementsByTagName('h1');
        for(i=0;i<p.length;i++){
            if(p[i].style.fontSize){
                var s=parseInt(p[i].style.fontSize.replace("px",""));
            } else {
                var s=12;}s-=10;p[i].style.fontSize=s+"px"}


});










        //YOUR CODE GOES HERE!


    })();

}

})();
