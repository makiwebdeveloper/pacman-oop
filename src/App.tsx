import { useEffect, useState } from "react";
import { Game } from "./models/Game";

function App() {
  const [game, setGame] = useState(new Game());

  const restart = () => {
    const newGame = new Game();
    newGame.board.initBoard();
    setGame(newGame);
  };
  
  console.log(game)

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="App">
      <h1>Pacman</h1>
    </div>
  );
}

export default App;
