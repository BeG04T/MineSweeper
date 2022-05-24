let game = 0
let set_minecount = 2

$(document).ready(function(){

    

    $("#Button").click(_ => {create_game()});

    const create_game = _ => {
        game = new Game(set_minecount)

        $("#start").hide()
        $("#GameBoard").html("<div id=\"MineField\">" +
    "</div>")

      for(let j = 0; j < game.theight; j++){
        for (let i = 0; i < game.twidth; i++){
        $("#MineField").append(`<div class=\"Mine\" id=\"M${i}+${j}\"></div>`)
      }}

        $("style").append("#MineField {" + 
			  "display: inline-grid;" +
			  "background-color: grey;" +
			  "padding: 10px;" +
			  "grid-template-columns:" + " auto".repeat(game.twidth) + ";" +
		    "}")
    }

    $("#GameBoard").on("click", ".Mine", function(foo) {
      const axis = this.id.slice(1).split("+")
      const nearby_Mines = game.clickTile(parseInt(axis[0]), parseInt(axis[1]))
      if (nearby_Mines < 0) {
        $(this).css("color", "red")
        $("#start").show()
      }
      $(this).html(nearby_Mines)
      $(this).removeClass("Mine");
      $(this).addClass("ClickedMine")
      if (game.nearbyMines(parseInt(axis[0]), parseInt(axis[1])) == 0) {
        for(let j = -1; j < 2; j++){
          for (let i = -1; i < 2; i++){
            $(`[id="M${parseInt(axis[0]) + i}+${parseInt(axis[1]) + j}"]`).trigger("click")
        }}
      }
      if (game.tiles == 0){
        $("#start").show()
      }
    });
  
  });