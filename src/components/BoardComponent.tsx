import classNames from "classnames";
import { FC } from "react";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";

interface Props {
  board: Cell[][];
  player: Player;
}

const BoardComponent: FC<Props> = ({ board, player }) => {
  return (
    <div className="w-[210px] h-[230px] sm:w-[420px] sm:h-[460px]">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] center ${classNames(
                {
                  "bg-yellow-300": player.x === cell.x && player.y === cell.y,
                  "bg-blue-600": cell.isWall,
                }
              )}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoardComponent;
