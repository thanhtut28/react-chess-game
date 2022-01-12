import { BoardProps } from "./board";
import classes from "../styles/block.module.css";
import { useState } from "react";
type BlockProps = {
   block: BoardProps;
   children?: React.ReactNode;
};

export default function Block({ block, children }: BlockProps) {
   const [isSelected, setIsSelected] = useState(false);

   return (
      <div
         className={`${classes.block} ${
            (block.row % 2 === 0 && block.col % 2 === 0) ||
            (block.row % 2 !== 0 && block.col % 2 !== 0)
               ? classes.blackBlock
               : classes.whiteBlock
         } `}
      >
         {children}
      </div>
   );
}
