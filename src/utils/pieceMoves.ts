import { BoardProps } from "./types";

function pieceMoves(
   currentPosition: BoardProps,
   destination: BoardProps,
   type: string,
   isInitial: boolean,
   isWhite: boolean
): boolean {
   switch (type) {
      case "pawn":
         if (currentPosition.col === destination.col) {
            if (isWhite) {
               if (isInitial) {
                  return (
                     destination.row - currentPosition.row <= 2 &&
                     destination.row - currentPosition.row > 0
                  );
               }
               return destination.row - currentPosition.row === 1;
            }
            if (isInitial) {
               return (
                  currentPosition.row - destination.row <= 2 &&
                  currentPosition.row - destination.row > 0
               );
            }
            return currentPosition.row - destination.row === 1;
         }
   }
   return false;
}

export { pieceMoves };
