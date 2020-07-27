var block = document.getElementById("block");
var hole = document.getElementById("hole");
var ball = document.getElementById("ball");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    var random = Math.random()*3;
    var top = (random*100)+150;
    hole.style.top = - (top) + "px";
    counter++;
});
setInterval(function(){
    var ballTop =
     parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
     if(jumping==0){
    ball.style.top = ( ballTop+3) + "px";
     }
     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
     var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
     var ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
     var bTop = -(500-ballTop);
     if((ballTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((bTop<holeTop)||(bTop>holeTop+130)))){
         alert("Game Over.Score: "+counter);
         ball.style.top = 100 + "px";
         counter=0; 
     }
 },10); 
function jump(){
    jumping = 1 ;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var ballTop =
        parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
       if((ballTop>6)&&(counter<15)){
           ball.style.top = ( ballTop-3) +"px";
        }
       if(jumpCount>20){
           clearInterval(jumpInterval);
           jumping=0;
           jumpCount=0;
       }
       jumpCount++;

    },10);
}