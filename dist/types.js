export var CellState;
(function (CellState) {
    CellState[CellState["Empty"] = 0] = "Empty";
    CellState[CellState["Ship"] = 1] = "Ship";
    CellState[CellState["Hit"] = 2] = "Hit";
    CellState[CellState["Miss"] = 3] = "Miss";
    CellState[CellState["Barrier"] = 4] = "Barrier";
})(CellState || (CellState = {}));
