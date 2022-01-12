import { BoardProps } from "../board";
import { initialPositions } from "../../utils/initalPositions";
import Pawn from "./pawn";
export default function Piece({ block }: { block: BoardProps }) {
   const { pawn } = initialPositions;
   const {
      white: { isWhite: pawnWhite },
      black: { isWhite: pawnBlack },
   } = pawn;
   return (
      <div>
         {pawn.white.positions.map(p => {
            if (p.row === block.row && p.col === block.col) {
               return <Pawn isWhite={pawnWhite} position={block} />;
            }
            return <></>;
         })}
         {pawn.black.positions.map(p => {
            if (p.row === block.row && p.col === block.col) {
               return <Pawn isWhite={pawnBlack} position={block} />;
            }
            return <></>;
         })}
      </div>
   );
}
