import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardProps, GameProps } from "../utils/types";

const name = "game";

interface SelectDispatch {
   type: string;
   isWhite: boolean;
   block: BoardProps;
}

const initialState: GameProps = {
   isSelection: false,
   selectedBlock: null,
   isWhiteTurn: true,
   selectedType: null,
};

const boardSlice = createSlice({
   name,
   initialState,
   reducers: {
      select(state, { payload }: PayloadAction<SelectDispatch>) {
         state.isSelection = true;
         state.selectedBlock = payload.block;
         state.selectedType = payload.type;
      },
      unSelect(state) {
         state.isSelection = false;
         state.selectedBlock = null;
         state.selectedType = null;
      },
      changeTurn(state) {
         state.isSelection = false;
         state.selectedBlock = null;
         state.selectedType = null;
         state.isWhiteTurn = !state.isWhiteTurn;
      },
   },
});

export const { select, unSelect, changeTurn } = boardSlice.actions;

export default boardSlice.reducer;
