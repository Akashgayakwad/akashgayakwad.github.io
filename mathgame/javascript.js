var playing = false;
var score;
var action;
var timeremaining;
var correctanswer;
document.getElementById("startreset").onclick = function(){
    if(playing == true){
        location.reload();
    }else{
        playing = true;
        score = 0;
         document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
       
        
         timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;  
        hide("gameover");
           document.getElementById("startreset").innerHTML = "Reset Game";
        
        startcountdown(); 
        generateQA();
    } 
}
for(i=1;i,5;i++){
    document.getElementById("box" + i).onclick = function(){
    if(playing == true){
        if(this.innerHTML == correctanswer){
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){hide("correct")},1000);
            generateQA();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){hide("wrong");},1000);
        }
    }
}

}
function startcountdown()
{
 action = setInterval(function(){
  timeremaining -= 1;
     document.getElementById("timeremainingvalue").innerHTML = timeremaining;
     if(timeremaining == 0)
        { stopcountdown();
         show("gameover");
         document.getElementById("gameover").innerHTML
          = "<p>Game Over!</p><p>Your score is:" + score + "</p>";
         hide("timeremaining");
         hide("correct");
         hide("wrong");
         playing = false;
         document.getElementById("startreset").innerHTML = "Start Game";
        }
 },1000);
}
function stopcountdown(){
    clearInterval(action);
}
function show(id){
    document.getElementById(id).style.display = "block";
}
function hide(id){ 
    document.getElementById(id).style.display = "none";
}
function generateQA(){
    var x = 10+ Math.round(19*Math.random());
    var y = 10+ Math.round(19*Math.random());
    correctanswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctposition = 1+Math.round(3*Math.random());
    document.getElementById("box" + correctposition).innerHTML = correctanswer;
    var answers = [correctanswer];
    
    for(i=1; i<5; i++){
        if(i != correctposition) {
            var wronganswer;
            do{
                wronganswer = (10+ Math.round(19*Math.random()))*(10+ Math.round(19*Math.random())); //a wrong answer
            }while(answers.indexOf(wronganswer)>-1)
            document.getElementById("box"+i).innerHTML = wronganswer;
            answers.push(wronganswer);
        }
    }
}