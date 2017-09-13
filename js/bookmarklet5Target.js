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


        $(document).click(function(){
            var p=document.getElementsByTagName('*');
            for(i=0;i<p.length;i++){
                if(p[i].style.transform:rotate("")){
                    var s=parseInt(p[i].style.transform:rotate("").replace("deg",""));
                } else {
                    var s=12;}s+=2;p[i].style.transform:rotate("") = s+"deg"}

        });

        $(document).mousemove(function(){
          $('body').css('transform', 'rotateX(0deg) rotateY(0deg)');

            var rotate_X;
            var rotate_Y;
            var invert = false;

            if (invert) {
              rotate_X = e.pageX;
              rotate_Y = e.pageY;
            } else if (!invert) {
              rotate_X = e.pageX;
              rotate_Y = -e.pageY;
            }

            $('body').css('transform', 'rotateX(' + rotate_Y + 'deg) rotateY(' + rotate_X + 'deg)')

        });



//
// $(document).mousemove(function(){
//     var p=document.getElementsByTagName('h1');
//     for(i=0;i<p.length;i++){
//         if(p[i].style.fontSize){
//             var s=parseInt(p[i].style.fontSize.replace("px",""));
//         } else {
//             var s=12;}s+=20;p[i].style.fontSize=s+"px"}
//
// });
//
// $(document).click(function(){
//     var p=document.getElementsByTagName('p');
//     for(i=0;i<p.length;i++){
//         if(p[i].style.fontSize){
//             var s=parseInt(p[i].style.fontSize.replace("px",""));
//         } else {
//             var s=12;}s+=10;p[i].style.fontSize=s+"px"}
//
//       var p=document.getElementsByTagName('h1');
//         for(i=0;i<p.length;i++){
//             if(p[i].style.fontSize){
//                 var s=parseInt(p[i].style.fontSize.replace("px",""));
//             } else {
//                 var s=12;}s-=10;p[i].style.fontSize=s+"px"}
//
//
// });










        //YOUR CODE GOES HERE!


    })();

}

})();
