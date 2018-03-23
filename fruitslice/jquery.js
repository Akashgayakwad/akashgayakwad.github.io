$(function(){
    var playing = false;
var score;
var trialsleft;
var fruits = ['apple','banana','cherries','grapes','mango','orange','peach','pear','watermelon'];
var step;
var action;
    $("#startreset").click(function(){
        if(playing == true)
    {        location.reload();
    }
        else{
            playing = true;
            score = 0;
            $("#scorevalue").html(score);
            $("#trialsleft").show();
            trialsleft = 3;
            addhearts();
            $("#gameover").hide();
            $("#startreset").html("Reset Game");
            startgame();
        }
    });
    
    
function addhearts(){
    $("#trialsleft").empty();
    for(i = 0; i < trialsleft; i++){
                  $("#trialsleft").append('<img src="images/heart.png" class="life"> ');
            }
}
    
function startgame(){
    $("#fruit1").show();
    choosefruit();
    $("#fruit1").css({'left' : Math.round(550*Math.random()),'top' : -50});
    step = 1+ Math.round(5*Math.random());
    action = setInterval(function(){
        $("#fruit1").css('top',$("#fruit1").position().top + step);
        if($("#fruit1").position().top > $("#fruitcontainer").height())
        {if(trialsleft > 1)
            {
            $("#fruit1").show();
            choosefruit();
            $("#fruit1").css({'left' : Math.round(550*Math.random()),'top' : -50});
            step = 1+ Math.round(5*Math.random());
            trialsleft--;
            addhearts();
            }
        else{
            $("#gameover").show();
            $("#gameover").html('<p.Game over!</p><p>your score is:' + score +'</p>');
            $("#startreset").html("Start Game");
            $("#trialsleft").hide();
            playing = false;
            $("#trialsleft").hide();
            stopgame();
            }
        }
           },10);
    
}

    $("#fruit1").mouseover(function(){
        score++;
        $("#scorevalue").html(score);
        document.getElementById("slicesound").play();
        //$("#slicesound")[0].play(); jqueryway
        clearInterval(action);
        $("#fruit").hide("explode",500);
        setTimeout(startgame(), 500);
    });
    
function choosefruit(){
    $("#fruit1").attr('src','images/' + fruits[Math.round(8*Math.random())] + '.png');
}
function stopgame(){
    clearInterval(action);
    $("#fruit1").hide(); 
}
    
});