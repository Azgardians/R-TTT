import { GameState } from "./GameState.js";

function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return <></>;
  }
  return <button className="reset-button" onClick={onReset}>Reset</button>;
}

export default Reset;
