import { FC } from "react";

interface Props {
  restart: () => void;
  isGameOver: boolean;
  hasApples: boolean;
  score: number;
}

const GameOverComponent: FC<Props> = ({
  restart,
  isGameOver,
  hasApples,
  score,
}) => {
  return (
    <div className="absolute bg-gray-900 shadow-xl rounded-xl w-[300px] p-6 center">
      <div className="flex flex-col items-center">
        <p className="text-white font-semibold text-xl">
          {isGameOver && !hasApples ? "You win!" : "Game over!"}
        </p>
        <p className="text-white font-semibold">score: {score}</p>
        <button
          onClick={restart}
          className="bg-yellow-200 transition hover:bg-yellow-300 font-semibold text-gray-800 px-4 py-1 rounded-xl mt-2"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default GameOverComponent;
