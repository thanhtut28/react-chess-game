import { BoardProps } from "../components/board";

interface IpieceDetails {
   isWhite: boolean;
   positions: BoardProps[];
}

interface IPiece {
   white: IpieceDetails;
   black: IpieceDetails;
}

interface Ipositions {
   pawn: IPiece;
}

const pawnWhiteRow: number[] = [2];
const pawnWhiteCol: number = 8;
const pawnBlackRow: number[] = [7];
const pawnBlackCol: number = 8;
let pawnWhitePositions: BoardProps[] = [];
let pawnBlackPositions: BoardProps[] = [];

for (let i = 0; i < pawnWhiteRow.length; i++) {
   for (let j = 1; j <= pawnWhiteCol; j++) {
      pawnWhitePositions.push({ row: pawnWhiteRow[i], col: j });
   }
}

for (let i = 0; i < pawnBlackRow.length; i++) {
   for (let j = 1; j <= pawnBlackCol; j++) {
      pawnBlackPositions.push({ row: pawnBlackRow[i], col: j });
   }
}

export const initialPositions: Ipositions = {
   pawn: {
      white: {
         isWhite: true,
         positions: pawnWhitePositions,
      },
      black: {
         isWhite: false,
         positions: pawnBlackPositions,
      },
   },
};
