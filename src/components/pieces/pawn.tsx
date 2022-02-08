import { Ipiece } from "../../utils/types";
import classes from "../../styles/pawn.module.css";

type PawnProps = {
   pawn: Ipiece;
   onClick: (type: string, isWhite: boolean) => void;
};

export default function Pawn({ pawn, onClick }: PawnProps) {
   const handleClick = () => {
      onClick(pawn.type, pawn.isWhite);
   };

   return (
      <>
         <div
            className={`${classes.pawn} ${pawn.isSelected ? classes.isSelected : ""}`}
            onClick={handleClick}
         >
            <img
               className={classes.image}
               src={
                  pawn.isWhite
                     ? `https://upload.wikimedia.org/wikipedia/commons/0/0e/White_Pawn_Xogos_da_Meiga_chess_icons_family.svg`
                     : `https://upload.wikimedia.org/wikipedia/commons/2/28/Black_Pawn_Xogos_da_Meiga_chess_icons_family.svg`
               }
               alt="pawn"
            ></img>
         </div>
      </>
   );
}
