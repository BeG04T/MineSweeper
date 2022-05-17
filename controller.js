let game = 0

$(document).ready(function(){

    

    $("#Button").click(_ => {create_game()});

    const create_game = _ => {
        game = new Game()
        $("#Button").hide()
        $("#GameBoard").html("<p> Test </p>")
    }
  
  });