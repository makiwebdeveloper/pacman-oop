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
    game.player.move(game.board);
    update();
  }

  function changeDirection({ key }: KeyboardEvent) {
    game.player.changeDirection(key);
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
      <BoardComponent board={game.board} player={game.player} />
    </div>
  );
}

export default App;
