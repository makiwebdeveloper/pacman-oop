import { useEffect, useState } from "react";
import { BoardComponent, GameOverComponent } from "./components";
import { Game, Ghost } from "./models";

function App() {
  const [game, setGame] = useState(new Game());

  console.log(game);

  function restart() {
    const newGame = new Game();
    newGame.board.initBoard();
    newGame.addGhosts([new Ghost(1, 17), new Ghost(10, 17), new Ghost(19, 17)]);
    setGame(newGame);
  }

  function update() {
    const copiedGame = game.copyGame();
    setGame(copiedGame);
  }

  function changeDirection({ key }: KeyboardEvent) {
    game.player.changeDirection(key);
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
    <div className={`bg-gray-800 w-screen h-screen center`}>
      <BoardComponent game={game} />
      {game.isGameOver && <GameOverComponent restart={restart} />}
    </div>
  );
}

export default App;
