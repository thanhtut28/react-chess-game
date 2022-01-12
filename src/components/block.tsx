import { BoardProps } from "../utils/types";
import classes from "../styles/block.module.css";
import { useDispatch } from "react-redux";
import { move } from "../store/pawnsSlice";

type BlockProps = {
   block: BoardProps;
   children?: React.ReactNode;
};

export default function Block({ block, children }: BlockProps) {
   const dispatch = useDispatch();
   const handleMove = () => {
      dispatch(move(block));
   };
   return (
      <div
         onClick={handleMove}
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
