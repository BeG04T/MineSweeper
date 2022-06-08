let game = 0
let set_minecount = 5
let standard_h = 5
let standard_w = 5

let right_mouse_down = false
let left_mouse_down = false

$(document).ready(function(){

    

    $("#easy").click(_ => {create_game(5, 5, 5)});
    $("#hard").click(_ => {create_game(40, 14, 18)});

    $("#restart").click(_ => {create_game(5, 5, 5)});

    const create_game = (mc, wi, he) => {
        game = new Game(mc, wi, he)

        $("#easy").hide()
        $("#restart").show()
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
      if (!game.initiated) {
        game.generateMines(parseInt(axis[0]), parseInt(axis[1]))
      }
      const nearby_Mines = game.clickTile(parseInt(axis[0]), parseInt(axis[1]))
      if (nearby_Mines < 0) {
        $(this).css("color", "red")
        $("#restart").hide()
        $("#easy").show()
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
        $("#restart").hide()
        $("#easy").show()
      }
    });

    $("#GameBoard").on("contextmenu", ".Mine", function(foo) {
      $(this).removeClass("Mine");
      $(this).addClass("FlaggedMine")
    });

    $("#GameBoard").on("contextmenu", ".FlaggedMine", function(foo) {
      $(this).removeClass("FlaggedMine");
      $(this).addClass("Mine")
    });

    // Left and Right Click Auto-Click feature
    
    $("#GameBoard").on("mousedown", ".ClickedMine", function(foo) {
      switch (foo.which) {
        case 1:
          left_mouse_down = true
          break;

        case 3:
          right_mouse_down = true
          break;

        default:
          console.log("Not a left or right click")
          break;
      }

      const axis = this.id.slice(1).split("+")
      if (left_mouse_down && right_mouse_down) {
        let nearby_mine = parseInt($(this).html())
        let flags = 0
        for(let j = -1; j < 2; j++){
          for (let i = -1; i < 2; i++){
            if ($(`[id="M${parseInt(axis[0]) + i}+${parseInt(axis[1]) + j}"]`).hasClass("FlaggedMine")) {
              flags++
            }
        }}
        if (flags == nearby_mine) {
          lrClear(parseInt(axis[0]), parseInt(axis[1]))
        }
      }
      
    });

    const lrClear = function (x, y) {
      for(let j = -1; j < 2; j++){
        for (let i = -1; i < 2; i++){
          $(`[id="M${x + i}+${y + j}"]`).trigger("click")
      }}
    }

    $("#GameBoard").on("mouseup", ".ClickedMine", function(foo) {
      switch (foo.which) {
        case 1:
          left_mouse_down = false
          break;

        case 3:
          right_mouse_down = false
          break;

        default:
          console.log("Not a left or right click")
          break;
      }
    });

  });