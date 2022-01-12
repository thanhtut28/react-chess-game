import { BoardProps } from "../board";

import classes from "../../styles/pawn.module.css";
import { useState, useEffect } from "react";
type PawnProps = {
   isWhite: boolean;
   position: BoardProps;
};

export default function Pawn({ isWhite, position }: PawnProps) {
   const [currentPosition, setCurrentPosition] = useState<BoardProps>();

   useEffect(() => {
      setCurrentPosition(position);
   }, [position]);

   return (
      <>
         <div className={classes.pawn}>
            <img
               className={classes.image}
               src={
                  isWhite
                     ? `https://upload.wikimedia.org/wikipedia/commons/0/0e/White_Pawn_Xogos_da_Meiga_chess_icons_family.svg`
                     : `https://upload.wikimedia.org/wikipedia/commons/2/28/Black_Pawn_Xogos_da_Meiga_chess_icons_family.svg`
               }
               alt="pawn"
            ></img>
         </div>
      </>
   );
}
