import classes from "../styles/board.module.css";
import { useState, useEffect } from "react";
import { useAppSelector } from "../store/index";
import Block from "./block";
import { BoardProps } from "../utils/types";
import { combinePositions } from "../utils/movable";

export default function Board() {
   const row = 8;
   const col = 8;

   const [board, setBoard] = useState<BoardProps[]>([]);
   const { pawns } = useAppSelector(state => state);

   useEffect(() => {
      for (let i = row; i > 0; i--) {
         for (let j = 1; j <= col; j++) {
            setBoard(prev => [...prev, { row: i, col: j }]);
         }
      }
   }, []);

   const pieces = combinePositions(pawns);

   const getPiece = (block: BoardProps) => {
      return pieces?.find(
         piece => block.row === piece.position.row && block.col === piece.position.col
      );
   };

   return (
      <div className={classes.container}>
         {board?.map(block => (
            <Block
               block={block}
               key={`row:${block.row} col:${block.col}`}
               pieces={pieces}
               piece={getPiece(block)}
            />
         ))}
      </div>
   );
}
