import { FC } from "react";

interface Props {
  restart: () => void;
}

const GameOverComponent: FC<Props> = ({ restart }) => {
  return (
    <div className="absolute bg-gray-900 shadow-xl rounded-xl w-[300px] p-6 center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-white font-semibold text-xl">Game Over</p>
        <button
          onClick={restart}
          className="bg-yellow-200 transition hover:bg-yellow-300 font-semibold text-gray-800 px-4 py-1 rounded-xl"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default GameOverComponent;
