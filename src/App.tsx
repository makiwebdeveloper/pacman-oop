import { useEffect, useState } from "react";
import { BoardComponent } from "./components";
import { Game } from "./models";

function App() {
  const [game, setGame] = useState(new Game());

  console.log("rerender");

  function restart() {
    const newGame = new Game();
    newGame.board.initBoard();
    setGame(newGame);
  }

  function update() {
    const copiedGame = game.getCopy();
    setGame(copiedGame);
  }

  function changeDirection({ key }: KeyboardEvent) {
    game.player.changeDirection(key);
    update();
  }

  useEffect(() => {
    restart();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (game.board.cells) {
        game.play();
      }
      update();
    }, 100);

    if (game.isGameOver) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [game]);

  useEffect(() => {
    window.addEventListener("keydown", changeDirection);

    return () => {
      window.removeEventListener("keydown", changeDirection);
    };
  }, [game]);

  return (
    <div className="w-screen h-screen center bg-gray-800">
      <div className="absolute top-5 left-5 w-10 h-10 rounded-full center bg-white text-gray-800 font-semibold">
        {game.count}
      </div>

      {game.isGameOver && (
        <div className="absolute left-[50%] translate-x-[-50%] bottom-5 flex gap-2">
          <p className="text-gray-800 font-semibold bg-white px-2 py-1 rounded-md">
            Game Over
          </p>
          <button
            onClick={restart}
            className="bg-yellow-300 px-2 py-1 rounded-md text-gray-800 font-semibold"
          >
            Restart
          </button>
        </div>
      )}
      <BoardComponent board={game.board} player={game.player} />
    </div>
  );
}

export default App;
