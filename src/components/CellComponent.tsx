import { FC } from "react";
import { Cell, Ghost, Player } from "../models";
import classNames from "classnames";

interface Props {
  cell: Cell;
  player: Player;
  ghost: Ghost;
}

const CellComponent: FC<Props> = ({ cell, player, ghost }) => {
  return (
    <div
      className={`w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] center ${classNames(
        {
          "bg-yellow-300": player.x === cell.x && player.y === cell.y,
          "bg-red-400": ghost.x === cell.x && ghost.y === cell.y,
          "bg-blue-600": cell.isWall,
        }
      )}`}
    >
      {cell.hasApple && (
        <div className="w-[3px] h-[3px] sm:w-[5px] sm:h-[5px] bg-yellow-300 rounded-full"></div>
      )}
    </div>
  );
};

export default CellComponent;
