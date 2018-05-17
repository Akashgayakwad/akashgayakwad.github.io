$(function()
  { 
    var e1 = $("#entry1");
    var e2 = $("#entry2");
    var e3 = $("#entry3");
    var e4 = $("#entry4");
    var e5 = $("#entry5");
    var e6 = $("#entry6");
    var e7 = $("#entry7");
    var e8 = $("#entry8");
    var e9 = $("#entry9");
    var e = $(".entries");
    var playing=false;
    var scorex= 0;
    var scoreo= 0;
    var marker =["O","X"];
    var i=0;
    var gameon= true;
    
    $("#instruct").click(function(){
        $("#instructions").toggle();
        
    });
    
    
    
    $("#startreset").click(function()
     {
      if(playing == true)
      {        
       location.reload();
      }    
      
        
      else
      {
        $("#startreset").html("Reset Game");
        playing= true;
        $("#scoreX").html(scorex); //setting score
        $("#scoreO").html(scoreo); //setting score
        e.html(""); //empty all the entries
      
        e.click(function()
        {  if(gameon)
           {
           if($(this).text() =="")
            {
             $(this).html(marker[i]);
             if(i==0)
             {
               i=1;
             }
             else if(i==1)
             {
               i=0;
             }
            check();
           }
          }
         });
      
      }
        
        
        
        
    });
      
function check(){
    if( e1.text() == "O" && e2.text() == "O" && e3.text() == "O")
    { 
        win(e1,e2,e3,"O");
    }
    
    else if(e1.text()=="X" && e2.text()=="X" && e3.text()=="X")
    {   win(e1,e2,e3,"X");
    }
    
    else if(e4.text()=="O" && e5.text()=="O" && e6.text()=="O")
    {   win(e4,e5,e6,"O");
    }
    
    else if(e4.text()=="X" && e5.text()=="X" && e6.text()=="X")
    {   win(e4,e5,e6,"X");
    }
    
    else if(e7.text()=="O" && e8.text()=="O" && e9.text()=="O")
    {   win(e7,e8,e9,"O");
    }
    
    else if(e7.text()=="X" && e8.text()=="X" && e9.text()=="X")
    {   win(e7,e8,e9,"X");
    }
    
    else if(e1.text()=="O" && e4.text()=="O" && e7.text()=="O")
    {   win(e1,e4,e7,"O");
    }
    
    else if(e1.text()=="X" && e4.text()=="X" && e7.text()=="X")
    {   
        win(e1,e4,e7,"X");
    }
    
    else if(e2.text()=="O" && e5.text()=="O" && e8.text()=="O")
    {   win(e2,e5,e8,"O");
    }
    
    else if(e2.text()=="X" && e5.text()=="X" && e8.text()=="X")
    {   win(e2,e5,e8,"X");
    }
    
    else if(e3.text()=="O" && e6.text()=="O" && e9.text()=="O")
    {   win(e3,e6,e9,"O");
    }
    
    else if(e3.text()=="X" && e6.text()=="X" && e9.text()=="X")
    {   win(e3,e6,e9,"X");
    }
    
    else if(e1.text()=="O" && e5.text()=="O" && e9.text()=="O")
    {   win(e1,e5,e9,"O");
    }
    
    else if(e1.text()=="X" && e5.text()=="X" && e9.text()=="X")
    {   win(e1,e5,e9,"X");
    }
    
    else if(e3.text()=="O" && e5.text()=="O" && e7.text()=="O")
    {   win(e3,e5,e7,"O");
    }
    
    else if(e3.text()=="X" && e5.text()=="X" && e7.text()=="X")
    {   win(e3,e5,e7,"X");
    }
    else if(e1.text()!="" && e2.text()!="" && e3.text()!="" && e4.text()!="" && e5.text()!="" && e6.text()!="" && e7.text()!="" && e8.text()!="" && e9.text()!="")
    {   scoreo++;
        $("#scoreO").html(scoreo);
        scorex++;
        $("#scoreX").html(scorex);
        $("#winner").html("MATCH");
        $("#status").html("DRAW");
        $("#winbox").show();
    }
      
  }
    
function win(a1,a2,a3,C){
    gameon = false;
    a1.css("color","white");
    a2.css("color","white");
    a3.css("color","white");
    if(C=="O"){
        scoreo++;
        scoreo++;
        $("#scoreO").html(scoreo);
        scorex--;
        $("#scoreX").html(scorex);
    }
    else{
        scorex++;
        scorex++;
        $("#scoreX").html(scorex);
        scoreo--;
        $("#scoreO").html(scoreo);
    }
    $("#winner").html("Player "+C);
    $("#status").html("WINS");
    $("#winbox").show();
}
    $("#nextgame").click(function(){
        $("#winbox").hide();
        e.html("");
        i=0;
        e.css("color","black");
        gameon=true;
        var temp = marker[0];
        marker[0] = marker[1];
        marker[1] = temp;
        
    });
    
});
