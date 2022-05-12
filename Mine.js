
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
    }

    detectMine(x, y){
        return [x, y] in this.mines
    }
}
export default Game
print("stuff")