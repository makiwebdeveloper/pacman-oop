import { FC } from "react";
import { Cell, Player } from "../models";
import classNames from "classnames";

interface Props {
  cell: Cell;
  player: Player;
}

const CellComponent: FC<Props> = ({ cell, player }) => {
  return (
    <div
      className={`w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] center ${classNames(
        {
          "bg-yellow-300": player.x === cell.x && player.y === cell.y,
          "bg-blue-600": cell.isWall,
        }
      )}`}
    ></div>
  );
};

export default CellComponent;
