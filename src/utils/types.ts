export type BoardProps = {
   row: number;
   col: number;
};
export interface Ipiece {
   pid: string;
   isWhite: boolean;
   position: BoardProps;
   isSelected: boolean;
}
