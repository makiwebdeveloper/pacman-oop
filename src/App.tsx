import { useEffect, useState } from "react";
import { BoardComponent } from "./components";
import { Game } from "./models";

function App() {
  const [game, setGame] = useState(new Game());

  const restart = () => {
    const newGame = new Game();
    newGame.board.initBoard();
    setGame(newGame);
  };

  console.log(game);

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="w-screen h-screen center bg-gray-800">
      <BoardComponent board={game.board} player={game.player} />
    </div>
  );
}

export default App;
