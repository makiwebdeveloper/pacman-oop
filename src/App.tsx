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

  useEffect(() => {
    restart();
  }, []);

  console.log(game);

  return (
    <div className="bg-gray-800 w-screen h-screen center">
      <BoardComponent game={game} />
    </div>
  );
}

export default App;
