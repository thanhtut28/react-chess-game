import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardProps, Ipiece } from "../utils/types";

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
      });
   }
}

const pawns = createSlice({
   name: "pawns",
   initialState,
   reducers: {
      selection(state, { payload }: PayloadAction<string>) {
         for (let i = 0; i < state.length; i++) {
            const isSelectAgain = state[i].isSelected && state[i].pid === payload;
            if (!isSelectAgain) {
               state[i].isSelected = false;
            }
         }
         const index = state.findIndex(p => p.pid === payload);
         state[index].isSelected = !state[index].isSelected;
      },
      move(state, { payload }: PayloadAction<BoardProps>) {
         const index = state.findIndex(p => p.isSelected === true);
         state[index].position = payload;
      },
   },
});

export const { selection, move } = pawns.actions;

export default pawns.reducer;
