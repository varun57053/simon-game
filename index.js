var buttonColours = ["red","blue", "green","yellow"];

var gamepattern=[];

var userClickedPattern = [];
var level = 0;


var started = false;

function gameStart(){
   if(!started){
      
   $("#level-title").text("level " + level);
   
   nextSequence();
   started = true;
   }
} 

$(document).keydown(gameStart);

$(document).click(gameStart);




$(".btn").click(function()
{
   var userChosenColor = $(this).attr("id");
   userClickedPattern.push(userChosenColor);

   playSound(userChosenColor);
   animatePress(userChosenColor);
   checkanswer(userClickedPattern.length - 1);
});
 

function checkanswer(currentLevel){

if(gamepattern[currentLevel] === userClickedPattern[currentLevel]){

console.log("success");
 if (userClickedPattern.length === gamepattern.length)
 {
        setTimeout( function()
        {

         nextSequence();
        }, 1000
        
        
        );
 }

}
else 
{
   console.log("wrong");
   playSound("wrong");
   $("body").addClass("gameover");
   setTimeout(function(){
      $("body").removeClass("gameover");
   },200);

   $("#level-title").text("Game Over, Press any key to restart" );
   startOver();
}

}

function nextSequence()
{
userClickedPattern = [];
   level++;

   $("#level-title").text("level " + level);
   
   var  randomNumber = Math.floor(Math.random() * 4 );
  

var randomChosenColour = buttonColours[randomNumber];

gamepattern.push(randomChosenColour);
$("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);


}
function playSound(name){


var audio = new Audio("sounds/" + name +".mp3");
audio.play();


}
 

function animatePress(currentcolor){
      $ ("#" + currentcolor).addClass("pressed");
      
   
setTimeout(function(){
   $("#"+ currentcolor).removeClass("pressed");
},100);
}

   function startOver(){
      level =0;
      gamepattern =[];
      started = false;
   }
 
