
//Currently the game of minesweeper is configured to a simple 5x5 game with 1 mine.
class Game {
    constructor(){
        this.mineCount = 1;
        this.width = 5;
        this.height = 5;
        this.remainingTiles = this.width * this.height - this.mineCount
        const Coord = [
            Math.floor(Math.random() * this.width),
            Math.floor(Math.random() * this.height)
        ];
        this.mines = [];
        this.mines.push(Coord);
    }

    get minePos(){
        return this.mines;
    }

    clickTile(x, y) {
        if (this.detectMine(x, y)) {
            this.remainingTiles--
            return this.remainingTiles + " Tiles Remain, nearby mines: " + this.nearbyMines(x, y)
        } else {
            return "you hit a mine, game over!"
        }
    }

    detectMine(x, y){
        if (x <= this.width && y <= this.height) {
            const contains = (element) => (element[0] == x && element[1] == y)
            if (!(this.mines.some(contains))) {
                return true
            } else {
                return false
            }
        } else {
            console.log("Out of Bounds")
            return false
        }
    }

    nearbyMines(x, y){
        let nearby = 0;
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <= 1; j++){
                let xPos = 0
                let yPos = 0
                if ((x + i) > this.width) {
                    xPos = 5
                } else {
                    xPos = Math.max(0, x+i)
                }

                if ((y + j) > this.height) {
                    yPos = 5
                } else {
                    yPos = Math.max(0, y+j)
                }
                const contains_2 = (element) => (element[0] == xPos && element[1] == yPos)
                if (this.mines.some(contains_2)) {
                    nearby++
                }
            
        }}
        return nearby
    }
}

const testGame = new Game
minePos = testGame.minePos
console.log(testGame.clickTile(minePos[0][0], minePos[0][1]))
console.log(testGame.clickTile(minePos[0][0], minePos[0][1] - 1))