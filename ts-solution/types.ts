export enum CellState {
    Empty,
    Ship,
    Hit,
    Miss,
    Barrier
}

export type Cell = {
    state:CellState
}
export type Board = Cell[][];

export interface Pars {
    ROWS : number, //x
    COLS : number //y
}