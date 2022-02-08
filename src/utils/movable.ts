import { pieceMoves } from "./pieceMoves";
import { BoardProps, Ipiece } from "./types";

function movable(
   currentPosition: BoardProps,
   destination: BoardProps,
   type: string,
   isInitial: boolean,
   isWhite: boolean,
   pieces: BoardProps[]
): boolean {
   if (isEmpty(pieces, destination)) {
      return pieceMoves(currentPosition, destination, type, isInitial, isWhite);
   }
   return false;
}

function eatable(
   currentPosition: BoardProps,
   destination: BoardProps,
   type: string,
   isInitial: boolean,
   isWhite: boolean
): boolean {
   return true;
}

function positionSlice(pieces: Ipiece[]): BoardProps[] {
   return pieces.map(piece => piece.position);
}

function combinePositions(...arr: BoardProps[][]): BoardProps[] {
   return arr.flat();
}
function isEmpty(pieces: BoardProps[], destination: BoardProps) {
   return !pieces.some(piece => piece.row === destination.row && piece.col === destination.col);
}

export { movable, eatable, combinePositions, positionSlice, isEmpty };
