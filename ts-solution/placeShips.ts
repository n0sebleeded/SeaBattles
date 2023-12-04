import { Board } from "./types.js";
import { ShowBoard, startGameBoard } from "./initBoard.js";
import { setupShip, localShips } from "./setupBoard.js";

let matrix:Board = setupShip(localShips[0], startGameBoard);
for (let i = 1; i < localShips.length; i++) {
    matrix = setupShip(localShips[i], matrix);
    console.log(i);
}
ShowBoard(matrix);