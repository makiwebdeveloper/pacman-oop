import { useEffect, useState } from "react";
import { BoardComponent } from "./components";
import { Game } from "./models/Game";
import { Directions, Player } from "./models/Player";

function App() {
  const [game, setGame] = useState(
    new Game(new Player(3, 1, Directions.RIGHT))
  );

  console.log("render");

  const restart = () => {
    const newGame = new Game(new Player(3, 1, Directions.RIGHT));
    newGame.initBoard();
    setGame(newGame);
  };

  const updateGame = () => {
    const newGame = game.getCopyGame();
    setGame(newGame);
  };

  const move = () => {
    game.player.move(game.board);
    updateGame();
  };

  const changeDirection = ({ key }: KeyboardEvent) => {
    game.player.changeDirection(key);
    updateGame();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      move();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [game]);

  useEffect(() => {
    restart();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", changeDirection);

    return () => {
      window.removeEventListener("keydown", changeDirection);
    };
  }, [game]);

  return (
    <div className="w-screen h-screen center">
      <BoardComponent board={game.board} player={game.player} />
    </div>
  );
}

export default App;
