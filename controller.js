$(document).ready(function(){

    

    $("#username").change(_ => {change_username()});

    const change_username = _ => {
        let un = $("#username").val()
        if (un.length < 6 || !(/^[_a-z0-9]*$/i.test(un))){
            $("#username_notification").html("Username is invalid")
            $("#username").attr("style", "background-color: red")
        } 
        else {$("#username_notification").html("")
        $("#username").attr("style", "")
        }
    }
  
  });