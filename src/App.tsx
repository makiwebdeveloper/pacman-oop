import { useEffect, useState } from "react";
import { BoardComponent } from "./components";
import { Game } from "./models/Game";
import { Directions, Player } from "./models/Player";

function App() {
  const [game, setGame] = useState(new Game(new Player(1, 1, Directions.LEFT)));

  const restart = () => {
    const newGame = new Game(new Player(1, 1, Directions.RIGHT));
    newGame.initBoard();
    setGame(newGame);
  };

  const updateGame = () => {
    const newGame = game.getCopyGame();
    setGame(newGame);
  };

  const moveHandler = () => {
    game.player.move(game.board);
    updateGame();
  };

  useEffect(() => {
    restart();
  }, []);

  console.log(game);

  return (
    <div className="w-screen h-screen center" onClick={moveHandler}>
      <BoardComponent board={game.board} player={game.player} />
    </div>
  );
}

export default App;
