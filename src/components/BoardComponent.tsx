import { FC } from "react";
import { Board, Player } from "../models";
import CellComponent from "./CellComponent";

interface Props {
  player: Player;
  board: Board;
}

const BoardComponent: FC<Props> = ({ player, board }) => {
  return (
    <div className="w-[210px] h-[230px] sm:w-[420px] sm:h-[460px]">
      {board.cells.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <CellComponent key={colIndex} cell={cell} player={player} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoardComponent;
