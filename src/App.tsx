import { useGameState } from "./utils/hooks";
import { CSSTransition } from "react-transition-group";

export const X_SIGN = "X";
export const O_SIGN = "O";

export type signType = typeof X_SIGN | typeof O_SIGN;
const showWinner = (winner: string | null) => {
  if (winner !== null) return true;
  else return false;
};

function App() {
  const { currentSign, cells, winner, winTripplet, onCellClick, onResetClick } =
    useGameState();
  return (
    <>
      <span>Текущий ход: {currentSign}</span>
      <button style={{ marginLeft: 15 }} onClick={onResetClick}>
        Reset
      </button>
      <div
        className="field"
        style={{ pointerEvents: winner ? "none" : "all", margin: "10px 0" }}
      >
        {cells.map((cell, index) => {
          return cell === null ? (
            <div
              className="cell"
              onClick={() => {
                onCellClick(index);
              }}
            ></div>
          ) : (
            <div
              style={{
                background: winTripplet.includes(index) ? "red" : "transparent",
                pointerEvents: "none",
              }}
              className="cell"
              onClick={() => {
                onCellClick(index);
              }}
            >
              {cell === X_SIGN ? X_SIGN : O_SIGN}
            </div>
          );
        })}
      </div>
      <div className="winner">
        <CSSTransition
          in={showWinner(winner)}
          classNames={"win"}
          unmountOnExit
          timeout={1000}
        >
          <span>Победили: {winner}</span>
        </CSSTransition>
      </div>
    </>
  );
}

export default App;
