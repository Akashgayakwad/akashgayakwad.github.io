$(function(){
    
    $("#firstname").focusout(function(){
        var firstname = $(this).val();
        if(firstname == ""){
            $("#errormessage").html("<p>Please enter your firstname</p>");
            $("#errormessage").fadeIn();
        }
    });
    $("#lastname").focusout(function(){
        var lastname = $(this).val();
        if(lastname == ""){
            $("#errormessage").html("<p>Please enter your lastname</p>");
            $("#errormessage").fadeIn();
        }
    });
    $("#age").focusout(function(){
        var age = $(this).val();
        if(age == ""){
            $("#errormessage").html("<p>Please enter your age</p>");
            $("#errormessage").fadeIn();
        }else if(age < 20){
             $("#errormessage").html("<p>Age must me greater than 20</p>");
            $("#errormessage").fadeIn();
        }
    });
    $("#email").focusout(function(){
        var email = $(this).val();
        console.log(email);
    });
    $("#contactno").focusout(function(){
        var contactno = $(this).val();
        console.log(contactno);
    });
    $("#password").focusout(function(){
        var password = $(this).val();
        console.log(password);
    });
    $("#password2").focusout(function(){
        var password2 = $(this).val();
        console.log(password2);
    });
});