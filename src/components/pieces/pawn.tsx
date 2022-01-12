import { Ipiece } from "../../utils/types";
import classes from "../../styles/pawn.module.css";
import { useAppDispatch } from "../../store/index";
import { selection } from "../../store/pawnsSlice";

type PawnProps = {
   pawn: Ipiece;
};

export default function Pawn({ pawn }: PawnProps) {
   const dispatch = useAppDispatch();

   const handleSelect = () => {
      dispatch(selection(pawn.pid));
   };

   console.log("isSelected", pawn.isSelected, pawn.pid);

   return (
      <>
         <div
            className={`${classes.pawn} ${pawn.isSelected ? classes.isSelected : ""}`}
            onClick={handleSelect}
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
