import { FC } from "react";
import { Game } from "../models";
import CellComponent from "./CellComponent";

interface Props {
  game: Game;
}

const BoardComponent: FC<Props> = ({ game }) => {
  return (
    <div
      className={`w-[210px] h-[230px] sm:w-[420px] sm:h-[460px] ${
        game.isGameOver ? "opacity-50" : ""
      }`}
    >
      {game.board.cells.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <CellComponent key={colIndex} cell={cell} player={game.player} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoardComponent;
