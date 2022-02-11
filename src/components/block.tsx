import React from "react";
import { BoardProps, Ipiece } from "../utils/types";
import classes from "../styles/block.module.css";
import { useAppSelector, useAppDispatch } from "../store/index";
import { move as pawnMove } from "../store/pawnsSlice";
import { changeTurn, select, unSelect } from "../store/gameSlice";
import { PAWN } from "../utils/pieceRoles";
import { movable } from "../utils/movable";
import { getMovablePositions } from "../utils/pieceMoves";
import Piece from "./pieces/piece";

type BlockProps = {
   block: BoardProps;
   children?: React.ReactNode;
   pieces: Ipiece[];
   piece: Ipiece | undefined;
};

export default function Block({ block, children, pieces, piece }: BlockProps) {
   const { game } = useAppSelector(state => state);
   const dispatch = useAppDispatch();

   const { selectedBlock, isSelection, selectedType, isWhiteTurn, movablePositions } = game;

   const isMovablePos = movablePositions?.find(
      pos => pos.col === block.col && pos.row === block.row
   );

   const handleClick = () => {
      if (!isSelection) {
         switch (piece?.type) {
            case PAWN:
               if (isWhiteTurn === piece.isWhite) {
                  const movablePos = getMovablePositions(
                     piece.position,
                     isWhiteTurn,
                     piece.isInitial,
                     pieces
                  );
                  return dispatch(
                     select({
                        type: piece.type,
                        block,
                        isWhite: piece.isWhite,
                        movablePositions: movablePos,
                     })
                  );
               }
         }
      }
      if (isSelection) {
         switch (selectedType) {
            case PAWN:
               const movablePositions = getMovablePositions(
                  block as BoardProps,
                  isWhiteTurn,
                  piece?.isInitial,
                  pieces
               );
               const isMovable = movable(
                  selectedBlock as BoardProps,
                  block,
                  selectedType as string,
                  true,
                  isWhiteTurn,
                  pieces
               );

               if (isWhiteTurn === piece?.isWhite) {
                  return dispatch(
                     select({
                        type: selectedType as string,
                        block,
                        isWhite: isWhiteTurn,
                        movablePositions,
                     })
                  );
               }

               if (selectedBlock === block) {
                  return dispatch(unSelect());
               }

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

   // console.log(piece);

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
         }  ${isMovablePos ? classes.isMovable : ""}`}
         onClick={handleClick}
      >
         {piece && <Piece key={piece.pid} piece={piece} />}
      </div>
   );
}
