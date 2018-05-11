<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>News Feed</title>
<style>
    @media only screen and (max-device-width: 480px){
    div.postcontainer{
        height: 160%;
        width: 100%;
        background-color:cornsilk;
        color:darkslategray;
    }    
        
    }
    .box{
        border-radius: 1px;
        border-color: black;
        border-width: 2px;
        border-style: solid;
    }
    .postcontainer{
        height: 640px;
        width: 400px;
        background-color:cornsilk;
        color:darkslategray;
    }
    .postcontainer a{
        color: chartreuse;
    }
    .posttitle{
        line-height: 30px;
        text-align: left;
        padding:0px;
        height: 7.03%;
        width: 98%;
        margin: 10px 0px 2px 0px;
        font-size: 1.5em;
    }
    a{
        padding: 0px;
    }
    .posttime{
        line-height:10px;
        height: 3.125%;
        width: 98%;
        margin:0px;
        border-style: none;
        text-align: left;
        padding-left: 2px;
        font-size: 12px;;
    }
    }
    .postbox{
        height: 78.125%;
        width: 98%;
        border-style: solid;
        border-width: 1.5px;
    }
    .postcaption{
        height: 15.625%;
        width: 98%;
        margin: 2px 2px;
    }
    .postpic{
        height: 80%;
        width: 80%;
        margin: 2px 2px;
        background-color:darkblue;
    }
    .postpic img{
        width: 100%;
        vertical-align: middle;
    }
    .postbuttons{
        height: 4.6875%;
        width: 95%;
        margin: 5px 0px;
        padding: 5px;
    }
    button{
        width: 30%;
        height: 90%;
        margin: 0px 5px;
        color: white;
        background-color: blueviolet;
        border-radius: 20%;
        border-width: 0px;
        font-family:monospace;
        font-size: 1.6em;
    }
</style>
</head>
<body>
<?php
$link = mysqli_connect('localhost','notesmanager','Akash@1998','socialmedia');
if(!$link){
    echo "Unable to connect to database";
    exit;
}
    $sql = "SELECT * FROM posts";
    $result = mysqli_query($link, $sql);
    if(!result){
        echo "Sorry! Unable to fetch Posts";
        exit;
    }
    $results = mysqli_fetch_array($result, MYSQLI_ASSOC);
    foreach($results)
    {
       
        
        
        echo'<center><div class="postcontainer box">
    <div class="posttitle box"><a href="#">'. $reslt['posted_by'] .'</a> posted a photo
    <div class="posttime box">'. $reslt['post_time'] .'</div>
    </div>
    
    <div class="postbox box">
        <div class="postcaption box"><h3>'. $reslt['post_caption'] .'</h3></div>
        <div class="postpic box">
        <img src="IMG_1220.jpg" alt="posted picture">
        </div>
    </div>
    <div class="postbuttons box">
    <button>LIKE</button>
    <button>COMMENT</button>
    <button>SHARE</button>
    </div>
    
</div>  
</center>';
    
    
    
    
    
    }
?>
</body>
<script>
        (function() {
            var img = document.getElementById('postpic').firstChild;
        img.onload = function(){
            if(img.height>img.width){
                img.height = '100%';
                img.width = 'auto';
            }
        };());
        </script>
</html>