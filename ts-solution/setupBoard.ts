import { gameBoard } from "./initBoard.js";
import { ShowBoard } from "./initBoard.js";
import { Board } from "./types.js";

function getDirection():boolean {
    return Math.random() < 0.5;
}

/*
function setupShip(size:number, gridmatrix:Board):Board {
    let direction:boolean = getDirection();

}*/
