$(function(){
    $("#register").attr('disabled','disabled');
    $("#register").text("Fill all the entries correctly");
    $("#register").addClass("btn-danger");
    $("#register").removeClass("btn-success");
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = false;
    var flag6 = false;
    var flag7 = false;
    var ready = false;
    $("#firstname").focusout(function(){
        var firstname = $(this).val();
        if(firstname == ""){
            $("#errormessage").html("<p>Please enter your firstname</p>");
            $("#errormessage").fadeIn();
            flag1 = false;
        }else{
            $("#errormessage").fadeOut();
            flag1 = true;
        }
        proceed();
    });
    
    
    $("#lastname").focusout(function(){
        var lastname = $(this).val();
        if(lastname == ""){
            $("#errormessage").html("<p>Please enter your lastname</p>");
            $("#errormessage").fadeIn();
            flag2 = false;
        }else{
            $("#errormessage").fadeOut();
            flag2 = true;
        }
        proceed();
    });
    
    
    $("#age").focusout(function(){
        var age = $(this).val();
        if(age == ""){
            $("#errormessage").html("<p>Please enter your age</p>");
            $("#errormessage").fadeIn();
            flag3 = false;
        }else if(age < 20){
             $("#errormessage").html("<p>Age must me greater than 20</p>");
            $("#errormessage").fadeIn();
            flag3 = false;
        }else{
            $("#errormessage").fadeOut();
            flag3 = true;
        }
        proceed();
    });
    
    
    $("#email").focusout(function(){
        var email = $(this).val();
        if(email == ""){
            $("#errormessage").html("<p>Please enter your age</p>");
            $("#errormessage").fadeIn();
            flag4 = false;
        }else{
            $("#errormessage").fadeOut();
            flag4 = true;
        }
        proceed();
    });
    
    
    $("#contactno").focusout(function(){
        var contactno = $(this).val();
        if(!contactno){
            $("#errormessage").html("<p>Please enter your contact number.</p>");
            $("#errormessage").fadeIn();
            flag5 = false;
        }
        else if(contactno <1000000000 || contactno > 9999999999){
            $("#errormessage").html("<p>Please enter a valid contact number.(10 digits)</p>");
            $("#errormessage").fadeIn();
            flag5 = false;
        }
        else{
            $("#errormessage").fadeOut();
            flag5 = true;
        }
        proceed();
    });
    
    
    $("#password").focusout(function(){
        var password = $(this).val();
        if(password == ""){
            $("#errormessage").html("<p>Please enter your password.</p>");
            $("#errormessage").fadeIn();
            flag6 = false;
        }
        
        else{
             var check = true;
             pattern = /[0-9]/ ;
            if(!pattern.test(password)){
                 $("#errormessage").html("<p>Password doesnot contain a number.</p>");
                $("#errormessage").fadeIn();
                check = false;
             }
            pattern = /[A-Z]/ ;
            if(!pattern.test(password)){
                $("#errormessage").append("<p>Password doesnot contain an Uppercase letter.</p>");
                $("#errormessage").fadeIn();
                check = false;
             }
            pattern = /[a-z]/ ;
            if(!pattern.test(password)){
                 $("#errormessage").append("<p>Password doesnot contain a lowercase letter</p>");
                $("#errormessage").fadeIn();
                check = false;
             }
            if(!check){
                flag6 = false;
            }
            else{
                flag6 = true;
            }
        }
        proceed();
    });
    
    
    $("#password2").focusout(function(){
        var password = $("#password").val();
        var password2 = $(this).val();
        if(password2 == ""){
                        $("#errormessage").html("<p>Please re-enter your password.</p>");
                        $("#errormessage").fadeIn();
                        flag7 = false;
        }else{
                if(password2 != password){
                        $("#errormessage").html("<p>Password doesnot match.</p>");
                        $("#errormessage").fadeIn();
                        flag7 = false;
                }else{
                        $("#errormessage").fadeOut();
                        flag7 = true;
                    }
        }
        proceed();
    });
    
    function proceed(){
        if(flag1 ==true && flag2 ==true && flag3 ==true && flag4 ==true && flag5 ==true && flag6 ==true && flag7 ==true)
            {
                ready = true;
            }
            else{
                ready = false;
            }
        
        if(ready){
                $("#register").removeAttr('disabled');
                $("#register").text("Click to Register");
                $("#register").addClass("btn-success");
                $("#register").removeClass("btn-danger");
        }
        else{
            $("#register").attr('disabled','disabled');
            $("#register").text("Fill all the entries correctly");
            $("#register").addClass("btn-danger");
            $("#register").removeClass("btn-success");
        }
    };
    
});