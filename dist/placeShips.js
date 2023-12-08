import { ShowBoard, startGameBoard } from "./initBoard.js";
import { setupShip, localShips } from "./setupBoard.js";
var matrix = setupShip(localShips[0], startGameBoard);
for (var i = 1; i < localShips.length; i++) {
    matrix = setupShip(localShips[i], matrix);
    console.log(i);
}
ShowBoard(matrix);