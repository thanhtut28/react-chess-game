import { BoardProps } from "../../utils/types";
import Pawn from "./pawn";
import { useAppDispatch } from "../../store/index";
import { PAWN } from "../../utils/pieceRoles";
import { useAppSelector } from "../../store/index";
import { select, unSelect } from "../../store/boardSlice";
interface PieceProps {
   block: BoardProps;
}

export default function Piece({ block }: PieceProps) {
   const { pawns, game } = useAppSelector(state => state);
   const dispatch = useAppDispatch();

   const pawn = pawns.find(
      pawn => pawn.position.col === block.col && pawn.position.row === block.row
   );

   const handleClick = (type: string, isWhite: boolean) => {
      switch (type) {
         case PAWN:
            if (game.isSelection && game.selectedBlock === block) {
               return dispatch(unSelect());
            }
            if (game.isWhiteTurn === isWhite) {
               return dispatch(select({ type, block, isWhite }));
            }
      }
   };

   return <>{pawn && <Pawn key={pawn.pid} pawn={pawn} onClick={handleClick} />}</>;
}
