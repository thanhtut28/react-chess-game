import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardProps, Ipiece } from "../utils/types";

interface MoveDispatch {
   destination: BoardProps;
   selectedBlock: null | BoardProps;
}

/**
 *
 * @useArrayinColForAllCol
 */
const pawn = [
   { row: 2, col: [8], isWhite: true },
   { row: 7, col: [8], isWhite: false },
];

let initialState: Ipiece[] = [];

for (let i = 0; i < pawn.length; i++) {
   for (let j = 1; j <= pawn[i].col[0]; j++) {
      initialState.push({
         pid: `pawn${pawn[i].isWhite ? "white" : "black"}${j}`,
         position: { row: pawn[i].row, col: j },
         isWhite: pawn[i].isWhite,
         isSelected: false,
         type: "pawn",
         isInitial: true,
      });
   }
}

const pawns = createSlice({
   name: "pawns",
   initialState,
   reducers: {
      move(state, { payload }: PayloadAction<MoveDispatch>) {
         const index = state.findIndex(
            pawn =>
               pawn.position.row === payload.selectedBlock?.row &&
               pawn.position.col === payload.selectedBlock?.col
         );
         state[index].position = payload.destination;
      },
   },
});

export const { move } = pawns.actions;

export default pawns.reducer;
