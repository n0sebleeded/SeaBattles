import { Board } from "./types.js";
import { CreateEmptyBoard } from "./initBoard.js";
import { setupShip, localShips } from "./setupBoard.js";

let matrix:Board = setupShip(localShips[0], CreateEmptyBoard());
let matrixPlayer:Board = setupShip(localShips[0], CreateEmptyBoard());


for (let i = 1; i < localShips.length; i++) {
    matrix = setupShip(localShips[i], matrix);
    /*matrixPlayer = setupShip(localShips[i], matrixPlayer);*/
}

export { matrix, matrixPlayer };