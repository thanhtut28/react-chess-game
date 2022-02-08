export type BoardProps = {
   row: number;
   col: number;
};
export interface Ipiece {
   pid: string;
   isWhite: boolean;
   type: string;
   position: BoardProps;
   isSelected: boolean;
   isInitial: boolean;
}

export interface GameProps {
   isSelection: boolean;
   selectedBlock: BoardProps | null;
   isWhiteTurn: boolean;
   selectedType: string | null;
}
