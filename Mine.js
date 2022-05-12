
//Currently the game of minesweeper is configured to a simple 5x5 game with 1 mine.
class Game {
    constructor(){
        this.mineCount = 1;
        this.width = 5;
        this.height = 5;
        const Coord = [
            Math.floor(Math.random() * this.width),
            Math.floor(Math.random() * this.height)
        ];
        this.mines = [];
        this.mines.push(Coord);
        console.log(Coord + " is the mine's position")
    }

    get minePos(){
        return this.mines;
    }

    detectMine(x, y){
        if (x <= this.width && y <= this.height) {
            if (!(this.mines.includes([x, y]))) {
                return "Not a mine, Nearby Mines: " + this.nearbyMines(x, y)
            } else {
                return "You hit a mine!"
            }
        } else {
            return "Out of Bounds"
        }
    }

    nearbyMines(x, y){
        let nearby = 0;
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <= 1; j++){
                let xPos = 0
                let yPos = 0
                const xBool = new Boolean((x + i) > this.width)
                const yBool = new Boolean((y + j) > this.height)
                if (xBool) {
                    xPos = 5
                } else {
                    xPos = max(0, x+i)
                }

                if (yBool) {
                    yPos = 5
                } else {
                    yPos = max(0, y+j)
                }
                if ([xPos, yPos] in this.mines) {
                    nearby++
                }
            
        }}
        return nearby
    }
}

const testGame = new Game
minePos = testGame.minePos
console.log([[1,2]].includes([1,2]))
console.log(testGame.detectMine(minePos[0][0], minePos[0][1]))
console.log(testGame.detectMine(minePos[0][0], minePos[0][1] - 1))