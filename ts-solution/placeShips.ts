import { Board } from "./types.js";
import { CreateEmptyBoard } from "./initBoard.js";
import {setupShip, localShips, updateLocalCombination} from "./setupBoard.js";

let matrix:Board = setupShip(localShips[0], CreateEmptyBoard());
for (let i = 1; i < localShips.length; i++) {
    matrix = setupShip(localShips[i], matrix);
}

updateLocalCombination()

let matrixPlayer:Board = setupShip(localShips[0], CreateEmptyBoard());
for (let i = 1; i < localShips.length; i++) {
    matrixPlayer = setupShip(localShips[i], matrixPlayer);
}

export { matrix, matrixPlayer };