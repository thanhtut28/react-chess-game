import { pieceMoves } from "./pieceMoves";
import { BoardProps, Ipiece } from "./types";

function movable(
   currentPosition: BoardProps,
   destination: BoardProps,
   type: string,
   isInitial: boolean | undefined,
   isWhite: boolean,
   pieces: Ipiece[]
): boolean {
   if (isEmpty(pieces, destination)) {
      return pieceMoves(currentPosition, destination, type, isInitial, isWhite, pieces);
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

function combinePositions(...arr: Ipiece[][]): Ipiece[] {
   return arr.flat();
}
function isEmpty(pieces: Ipiece[], destination: BoardProps) {
   return !pieces.some(
      piece => piece.position.row === destination.row && piece.position.col === destination.col
   );
}

export { movable, eatable, combinePositions, isEmpty };
