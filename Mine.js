
//Currently the game of minesweeper is configured to a simple 5x5 game with 1 mine.
class Game {
    constructor(c, w, h){
        this.mineCount = c;
        this.width = w;
        this.height = h;
        this.created = false;
        this.remainingTiles = this.width * this.height - this.mineCount
        this.mines = [];


        this.clicked = []
    }

    get initiated(){
        return this.created;
    }

    get twidth(){
        return this.width;
    }

    get theight(){
        return this.height;
    }

    get minePos(){
        return this.mines;
    }

    get tiles(){
        return this.remainingTiles
    }

    generateMines(x, y) {
        /** 
        Given an x,y coordinate, generate mines that are not on said tile
        */
        
        while (this.mines.length < this.mineCount) {
            const Coord = [
                Math.floor(Math.random() * (this.width - 1)),
                Math.floor(Math.random() * (this.height - 1))
            ];
            const contains_mine = (element) => (element[0] == Coord[0] && element[1] == Coord[1])
            if (!this.mines.some(contains_mine) ) {
                if (!((Math.abs(Coord[0] - x) <= 1) && Math.abs(Coord[1] - y) <= 1)) {
                    this.mines.push(Coord);
                }     
            }
        }
        this.created = true
        console.log(this.mines)
    }

    clickTile(x, y) {
        const contains_clicked = (element) => (element[0] == x && element[1] == y)
        if (!this.clicked.some(contains_clicked)) {
            this.clicked.push([x, y])
            if (!this.detectMine(x, y)) {
                this.remainingTiles--
                if (this.remainingTiles == 0) {
                    console.log("you win! no more mines!")
                    return this.nearbyMines(x, y)
                }
                console.log(this.remainingTiles + " Tiles Remain, nearby mines: " + this.nearbyMines(x, y))
                return this.nearbyMines(x, y)
            } else {
                console.log("you hit a mine, game over!")
                return -1
            }
        } else {
            console.log("this tile was clicked already!")
        }
    }

    detectMine(x, y){
        if (x < this.width && y < this.height && x >= 0 && y >= 0) {
            const contains = (element) => (element[0] == x && element[1] == y)
            if (this.mines.some(contains)) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    nearbyMines(x, y){
        let nearby = 0;
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <= 1; j++){
                let xPos = x+i
                let yPos = y+j
                if (this.detectMine(xPos, yPos)) {
                    nearby++
                }
            
        }}
        return nearby
    }
}

//const testGame = new Game
//minePos = testGame.minePos
//console.log(minePos)
//console.log(testGame.clickTile(minePos[0][0], minePos[0][1] + 1))
//console.log(testGame.clickTile(minePos[0][0], 0))