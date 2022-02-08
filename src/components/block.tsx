import { BoardProps, Ipiece } from "../utils/types";
import classes from "../styles/block.module.css";
import { useAppSelector, useAppDispatch } from "../store/index";
import { move as pawnMove } from "../store/pawnsSlice";
import { changeTurn } from "../store/boardSlice";
import { PAWN } from "../utils/pieceRoles";
import { movable } from "../utils/movable";

type BlockProps = {
   block: BoardProps;
   children?: React.ReactNode;
   pieces: BoardProps[];
};

export default function Block({ block, children, pieces }: BlockProps) {
   const { game, pawns } = useAppSelector(state => state);
   const dispatch = useAppDispatch();

   const { selectedBlock, isSelection, selectedType, isWhiteTurn } = game;

   const handleClick = () => {
      if (isSelection) {
         switch (selectedType) {
            case PAWN:
               const isMovable = movable(
                  selectedBlock as BoardProps,
                  block,
                  selectedType as string,
                  true,
                  isWhiteTurn,
                  pieces
               );
               if (isMovable) {
                  dispatch(pawnMove({ destination: block, selectedBlock }));
                  dispatch(changeTurn());
               }
            // if (isEatable) {
            //    dispatch(pawnMove({ destination: block, selectedBlock }));
            // }
         }
      }
   };

   return (
      <div
         className={`${classes.block} ${
            (block.row % 2 === 0 && block.col % 2 === 0) ||
            (block.row % 2 !== 0 && block.col % 2 !== 0)
               ? classes.blackBlock
               : classes.whiteBlock
         } ${
            block.row === selectedBlock?.row && block.col === selectedBlock?.col
               ? classes.isSelected
               : ""
         }`}
         onClick={handleClick}
      >
         {children}
      </div>
   );
}
