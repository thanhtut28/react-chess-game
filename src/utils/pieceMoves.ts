import { BoardProps, Ipiece } from "./types";

interface ImovablePos {
   currentPosition: BoardProps;
   destination: BoardProps;
   isInitial: boolean;
   isWhite: boolean;
   pieces: Ipiece[];
}

function pieceMoves(
   currentPosition: BoardProps,
   destination: BoardProps,
   type: string,
   isInitial: boolean | undefined,
   isWhite: boolean,
   pieces: Ipiece[]
): boolean {
   switch (type) {
      case "pawn":
         const movablePositions = getMovablePositions(currentPosition, isWhite, isInitial, pieces);
         return movablePositions.some(
            pos => pos.col === destination.col && pos.row === destination.row
         );
   }
   return false;
}

function getMovablePositions(
   currentPosition: BoardProps,
   isWhite: boolean,
   isInitial: boolean | undefined,
   pieces: Ipiece[]
): BoardProps[] {
   let movablePositions: BoardProps[] = [];
   const movableRows = isInitial ? 2 : 1;

   if (isWhite) {
      const piece = pieces
         .filter(
            piece =>
               !(
                  piece.position.col === currentPosition.col &&
                  piece.position.row === currentPosition.row
               )
         )
         .find(
            piece =>
               piece.position.col === currentPosition.col &&
               currentPosition.row + movableRows - piece.position.row >= 0 &&
               currentPosition.row + movableRows - piece.position.row < 2
         );
      for (let i = currentPosition.row + 1; i <= currentPosition.row + movableRows; i++) {
         if (piece && piece.position.row > i) {
            movablePositions.push({ row: i, col: currentPosition.col });
         }
         if (!piece) {
            movablePositions.push({ row: i, col: currentPosition.col });
         }
      }
   }
   if (!isWhite) {
      const piece = pieces
         .filter(
            piece =>
               !(
                  piece.position.col === currentPosition.col &&
                  piece.position.row === currentPosition.row
               )
         )
         .find(
            piece =>
               piece.position.col === currentPosition.col &&
               piece.position.row - (currentPosition.row - movableRows) >= 0 &&
               piece.position.row - (currentPosition.row - movableRows) < 2
         );

      for (let i = currentPosition.row - 1; i >= currentPosition.row - movableRows; i--) {
         if (piece && piece.position.row < i) {
            movablePositions.push({ row: i, col: currentPosition.col });
         }
         if (!piece) {
            movablePositions.push({ row: i, col: currentPosition.col });
         }
      }
   }
   return movablePositions;
}

export { pieceMoves, getMovablePositions };
