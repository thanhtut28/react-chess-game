import { Ipiece } from "../../utils/types";
import Pawn from "./pawn";

import { PAWN } from "../../utils/pieceRoles";

interface PieceProps {
   piece: Ipiece | undefined;
}

export default function Piece({ piece }: PieceProps) {
   switch (piece?.type) {
      case PAWN:
         return <Pawn key={piece.pid} {...piece} />;
      default:
         return <></>;
   }
}
