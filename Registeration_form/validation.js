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
    var error = $("#errormessage");
    error.html("");
    error.hide();
    var missingfname = '<p id="missingfname">Please enter your firstname.</p>';
    var missinglname = '<p id="missinglname">Please enter your lastname.</p>';
    var missingage = '<p id= "missingage">Please enter your age</p>';
    var invalidage = '<p id= "invalidage">Age must be greater than or equal to 20.</p>';
    var missingemail = '<p id= "missingemail">Please enter your email.</p>';
    var missingno = '<p id= "missingno">Please enter your contact number.</p>';
    var invalidno = '<p id= "invalidno">Please enter a valid contact no.</p>';
    var missingpswd = '<p id= "missingpswd">Please enter a password</p>';
    var shortpswd = '<p id="shortpswd">Password must be 8 characters long.</p>';
    var missingU = '<p id= "missingU">Password must contain atleast 1 uppercase letter</p>';
    var missingL = '<p id= "missingL">Password must contain atleast 1 lowercase letter</p>';
    var missingN = '<p id= "missingN">Password must contain atleast 1 number</p>';
    var missingpswd2 = '<p id= "missingpswd2">Please Re-enter your password.</p>';
    var matcherror = '<p id= "matcherror">Password do not match</p>';
    
    
    //focusout section
    
    
    $("#firstname").focusout(function(){
        var firstname = $(this).val();
        if(firstname == ""){
            if(!$("#missingfname").length){
               error.append(missingfname);
               }
            flag1 = false;
        }else{
            $("#missingfname").remove();
            flag1 = true;
        }
        proceed();
        edisplay();
    });
    
    
    $("#lastname").focusout(function(){
        var lastname = $(this).val();
        if(lastname == ""){
            if(!$("#missinglname").length){
                error.append(missinglname);
            }
            flag2 = false;
        }else{
            $("#missinglname").remove();
            flag2 = true;
        }
        proceed();
        edisplay();
    });
    
    
    $("#age").focusout(function(){
        var age = $(this).val();
        if(age == ""){
            if(!$("#missingage").length){
                error.append(missingage);
            }
            $("#invalid age").remove();
            flag3 = false;
        }else if(age < 20){
            if(!$("#invalidage").length){
                error.append(invalidage);
            }
            $("#missingage").remove();
            flag3 = false;
        }else{
            $("#missingage").remove();
            $("#invalidage").remove();
            flag3 = true;
        }
        proceed();
        edisplay();
    });
    
    
    $("#email").focusout(function(){
        var email = $(this).val();
        if(email == ""){
            if(!$("#missingemail").length){
                error.append(missingemail);
            }
            flag4 = false;
        }else{
            $("#missingemail").remove();
            flag4 = true;
        }
        proceed();
        edisplay();
    });
    
    
    $("#contactno").focusout(function(){
        var contactno = $(this).val();
        if(!contactno){
            if(!$("#missingno").length){
                error.append(missingno);
            }
            $("#invalidno").remove();
            flag5 = false;
        }
        else if(contactno <1000000000 || contactno > 9999999999){
            if(!$("#invalidno").length){
                error.append(invalidno);
            }
            $("#missingno").remove();
            flag5 = false;
        }
        else{
            $("#missingno").remove();
            $("#invalidno").remove();
            flag5 = true;
        }
        proceed();
        edisplay();
    });
    
    
    $("#password").focusout(function(){
        var password = $(this).val();
        
        if(password == ""){
            if(!$("#missingpswd").length){
                error.append(missingpswd);
            }
            $("#shortpswd").remove();
            $("#missingU").remove();
            $("#missingL").remove();
            $("#missingN").remove();
            flag6 = false;
            console.log("missingpswd");
        }
        
        else if(password.length < 8)
        {
            if(!$("#shortpswd").length)
            {
                error.append(shortpswd);
            }
            $("#missingpswd").remove();
            $("#missingU").remove();
            $("#missingL").remove();
            $("#missingN").remove();
            flag6 = false;
            console.log("shortpswd");
        }
        else{
             
             $("#missingpswd").remove();
             $("#shortpswd").remove();
             var check = true;
            
            
            
             pattern = /[0-9]/ ;
             var n = pattern.test(password);
             pattern = /[A-Z]/ ;
             var u = pattern.test(password);
             pattern = /[a-z]/ ;
             var l = pattern.test(password); 
            
            console.log("pswdlongenough");
            if(!n){
                    if(!$("#missingN").length)
                    {
                        error.append(missingN);
                    }
                check = false;
                console.log("missingnumber");
             }
             else{
                 $("#missingN").remove();
                 console.log("notmissingnumber");
             }
            
            
            if(!u){
                if(!$("#missingU").length)
                    {
                        error.append(missingU);
                    }
                check = false;
                console.log("missingUppercase");
             }
            else{
                 $("#missingU").remove();
                 console.log("notmissingUppercase");
             }
            
            
            
            if(!l){
                 if(!$("#missingL").length)
                    {
                        error.append(missingL);
                    }
                check = false;
                console.log("missingLowercase");
             }
             else{
                 $("#missingL").remove();
                 console.log("notmissingLowercase");
             }
            
        
            if(!check){
                flag6 = false;
            }
            else{
                /*$("#missingpswd").remove();
                $("#shortpswd").remove();
                $("#missingU").remove();
                $("#missingL").remove();
                $("#missingN").remove();*/
                flag6 = true;
                console.log("valid password");
                
            }
        }
        proceed();
        edisplay();
    });
    
    
    $("#password2").focusout(function(){
        var password = $("#password").val();
        var password2 = $(this).val();
        if(password2 == ""){
                        if(!$("#missingpswd2").length)
                        {
                            error.append(missingpswd2);
                        }
                        $("#matcherror").remove();
                        flag7 = false;
        }
        else if(password2 != password)
        {
                        if(!$("#matcherror").length)
                        {
                            error.append(matcherror);
                        }
                        $("#missingpswd2").remove();
                        flag7 = false;
        }
        else{
                        $("#missingpswd2").remove();
                        $("#matcherror").remove();
                        flag7 = true;
        }
        
        proceed();
        edisplay();
    });
    
//functions
    //function to display or hide submit button
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
    
    //function to display or hide error message
    function edisplay(){
            if(error.html() ==""){
                error.fadeOut();
            }else{
                error.fadeIn();
            }
        
    };
    
});