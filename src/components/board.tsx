import classes from "../styles/board.module.css";
import { useState, useEffect } from "react";
import Block from "./block";
import Piece from "./pieces/piece";

export type BoardProps = {
   row: number;
   col: number;
};

export default function Board() {
   const row = 8;
   const col = 8;

   const [board, setBoard] = useState<BoardProps[]>([]);

   useEffect(() => {
      for (let i = row; i > 0; i--) {
         for (let j = 1; j <= col; j++) {
            setBoard(prev => [...prev, { row: i, col: j }]);
         }
      }
   }, []);

   return (
      <div className={classes.container}>
         {board.map(block => (
            <Block block={block} key={`row:${block.row} col:${block.col}`}>
               <Piece block={block} />
            </Block>
         ))}
      </div>
   );
}
