import { BoardProps } from "../../utils/types";
import { Ipiece } from "../../utils/types";
import Pawn from "./pawn";

interface PieceProps {
   block: BoardProps;
   pawns: Ipiece[];
}
export default function Piece({ block, pawns }: PieceProps) {
   console.log(pawns);

   return (
      <>
         {pawns.map((pawn, i) => {
            if (pawn.position.col === block.col && pawn.position.row === block.row) {
               return <Pawn key={`pawn${i}`} pawn={pawn} />;
            }
            return null;
         })}
      </>
   );
}
