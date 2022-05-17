let game = 0

$(document).ready(function(){

    

    $("#Button").click(_ => {create_game()});

    const create_game = _ => {
        game = new Game()

        $("#start").hide()
        $("#GameBoard").html("<div id=\"MineField\">" +
    "</div>")

      for(let j = 0; j < game.theight; j++){
        for (let i = 0; i < game.twidth; i++){
        $("#MineField").append(`<div class=\"Mine\" id=\"${i},${j}\"></div>`)
      }}

        $("style").append("#MineField {" + 
			  "display: inline-grid;" +
			  "background-color: grey;" +
			  "padding: 10px;" +
			  "grid-template-columns:" + " auto".repeat(game.twidth) + ";" +
		    "}")
    }

    $("#GameBoard").on("click", ".Mine", function(foo) {
      const axis = this.id.split(",")
      console.log(game.nearbyMines(parseInt(axis[0]), parseInt(axis[1])))
      $(this).html(game.clickTile(parseInt(axis[0]), parseInt(axis[1])))
      $(this).removeClass("Mine");
      $(this).addClass("ClickedMine")
      if (game.tiles == 0){
        console.log("reached here!")
        $("#start").show()
      }
    });
  
  });