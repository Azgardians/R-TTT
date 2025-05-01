import { GameState } from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.playerXWins:
      return <div className="game-over">X wins!</div>;
    case GameState.playerOWins:
      return <div className="game-over">O wins!</div>;
    case GameState.draw:
      return <div className="game-over">It's a draw!</div>;
    default:
      return <></>;
  }
}

export default GameOver;
