var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result")
const score =  document.getElementById("score")
const score1 =  document.getElementById("score1")
var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")
var bgsound = document.getElementById("bgSound")




// bluecar move
blueCar.addEventListener("animationiteration", function(){
    bgsound.play()
    var random = ((Math.floor(Math.random() * 3)) * 100)
    blueCar.style.left = random + "px";
    counter++
    if(counter>40){
        blueCar.style.animation = "move 1s linear  infinite" ;}
    score1.innerHTML = `score: ${counter} `;
   
})


//rececar move
window.addEventListener("keydown", function(e){
   if(e.keyCode == "39"){ var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
    if(raceCarLeft < 260){raceCar.style.left = (raceCarLeft + 100) + "px"}
    jumpsound.play()
};

    if(e.keyCode == "37"){
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if(raceCarLeft > 0){raceCar.style.left = (raceCarLeft - 100) + "px"
        jumpsound.play()
    }

    }
})


//Game over
setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if((blueCarLeft === raceCarLeft) && (blueCarTop > 372) && (blueCarTop < 518)){
            bgsound.pause()
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;
            counter = 0;
        }
}, 10)

