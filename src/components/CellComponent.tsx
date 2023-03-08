import { FC } from "react";
import { Cell, Ghost, Player } from "../models";
import classNames from "classnames";

interface Props {
  cell: Cell;
  player: Player;
  ghosts: Ghost[];
}

const CellComponent: FC<Props> = ({ cell, player, ghosts }) => {
  return (
    <div className={`w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] center`}>
      {cell.hasApple && (
        <div className="w-[3px] h-[3px] sm:w-[5px] sm:h-[5px] bg-yellow-300 rounded-full absolute z-[0]"></div>
      )}
      <div
        className={`w-full h-full relative z-[1] ${classNames(
          { "bg-yellow-300": player.x === cell.x && player.y === cell.y },
          { "bg-blue-600": cell.isWall },
          {
            "bg-red-400": ghosts.find(
              (ghost) => ghost.x === cell.x && ghost.y === cell.y
            ),
          }
        )}`}
      ></div>
    </div>
  );
};

export default CellComponent;
