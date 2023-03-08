import { useEffect, useState } from "react";
import { BoardComponent } from "./components";
import { Game } from "./models";

function App() {
  const [game, setGame] = useState(new Game());

  function restart() {
    const newGame = new Game();
    newGame.board.initBoard();
    setGame(newGame);
  }

  function update() {
    const copiedGame = game.getCopy();
    setGame(copiedGame);
  }

  function move() {
    if (game.board.cells) {
      game.player.move(game.board);
      game.player.eat(game);
      game.checkGameOver();
    }
    update();
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
      move();
    }, 100);

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
    <div className="w-screen h-screen center bg-gray-800" onClick={move}>
      <div className="absolute top-5 left-5 w-10 h-10 rounded-full center bg-white text-gray-800 font-semibold">
        {game.count}
      </div>

      {game.isGameOver && (
        <div className="absolute left-[50%] translate-x-[-50%] text-gray-800 bottom-5 font-semibold bg-white bg-opacity-50 px-2 py-1 rounded-md ">
          Game Over
        </div>
      )}
      <BoardComponent board={game.board} player={game.player} />
    </div>
  );
}

export default App;
