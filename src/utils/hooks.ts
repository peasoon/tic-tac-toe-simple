import { useState } from "react";
import { X_SIGN, O_SIGN, signType } from "../App";

export const useGameState = () => {
  const [currentSign, setCurrentSign] = useState<signType>("X");
  const [cells, setCells] = useState(new Array(9).fill(null));
  const [winner, setWinner] = useState<signType | "Draw" | null>(null);
  const [winTripplet, setWinTripplet] = useState(new Array(3).fill(null));
  const findWinner = (arr: (signType | null)[]) => {
    console.log("finding winner");
    //row X
    if (arr[0] === X_SIGN && arr[1] === X_SIGN && arr[2] === X_SIGN) {
      setWinTripplet([0, 1, 2]);
      setWinner(X_SIGN);
    }
    if (arr[3] === X_SIGN && arr[4] === X_SIGN && arr[5] === X_SIGN) {
      setWinTripplet([3, 4, 5]);
      setWinner(X_SIGN);
    }
    if (arr[6] === X_SIGN && arr[7] === X_SIGN && arr[8] === X_SIGN) {
      setWinTripplet([6, 7, 8]);
      setWinner(X_SIGN);
    }
    //----
    //col X
    if (arr[0] === X_SIGN && arr[3] === X_SIGN && arr[6] === X_SIGN) {
      setWinTripplet([0, 3, 6]);
      setWinner(X_SIGN);
    }
    if (arr[1] === X_SIGN && arr[4] === X_SIGN && arr[7] === X_SIGN) {
      setWinTripplet([1, 4, 7]);
      setWinner(X_SIGN);
    }
    if (arr[2] === X_SIGN && arr[5] === X_SIGN && arr[8] === X_SIGN) {
      setWinTripplet([2, 5, 8]);
      setWinner(X_SIGN);
    }
    //----
    //diag X
    if (arr[0] === X_SIGN && arr[4] === X_SIGN && arr[8] === X_SIGN) {
      setWinTripplet([0, 4, 8]);
      setWinner(X_SIGN);
    }
    if (arr[2] === X_SIGN && arr[4] === X_SIGN && arr[6] === X_SIGN) {
      setWinTripplet([2, 4, 6]);
      setWinner(X_SIGN);
    }
    //----

    //-------------------

    //row O
    if (arr[0] === O_SIGN && arr[1] === O_SIGN && arr[2] === O_SIGN) {
      setWinTripplet([0, 1, 2]);
      setWinner(O_SIGN);
    }
    if (arr[3] === O_SIGN && arr[4] === O_SIGN && arr[5] === O_SIGN) {
      setWinTripplet([3, 4, 5]);
      setWinner(O_SIGN);
    }
    if (arr[6] === O_SIGN && arr[7] === O_SIGN && arr[8] === O_SIGN) {
      setWinTripplet([6, 7, 8]);
      setWinner(O_SIGN);
    }
    //----
    //col O
    if (arr[0] === O_SIGN && arr[3] === O_SIGN && arr[6] === O_SIGN) {
      setWinTripplet([0, 3, 6]);
      setWinner(O_SIGN);
    }
    if (arr[1] === O_SIGN && arr[4] === O_SIGN && arr[7] === O_SIGN) {
      setWinTripplet([1, 4, 7]);
      setWinner(O_SIGN);
    }
    if (arr[2] === O_SIGN && arr[5] === O_SIGN && arr[8] === O_SIGN) {
      setWinTripplet([2, 5, 8]);
      setWinner(O_SIGN);
    }
    //----
    //diag O
    if (arr[0] === O_SIGN && arr[4] === O_SIGN && arr[8] === O_SIGN) {
      setWinTripplet([0, 4, 8]);
      setWinner(O_SIGN);
    }
    if (arr[2] === O_SIGN && arr[4] === O_SIGN && arr[6] === O_SIGN) {
      setWinTripplet([2, 4, 6]);
      setWinner(O_SIGN);
    }
    //----
  };
  const findDraw = (arr: (signType | null)[]) => {
    if (!arr.includes(null) && !winner) setWinner("Draw");
  };
  const onCellClick = (index: number) => {
    setCells((prev) => {
      const newArray = [
        ...prev.map((cell, ind) => {
          if (index === ind) return currentSign;
          else return cell;
        }),
      ];
      if (!newArray.includes(null)) findDraw(newArray);
      findWinner(newArray);
      return newArray;
    });
    setCurrentSign((sign) => {
      if (sign === X_SIGN) return O_SIGN;
      else return X_SIGN;
    });
  };
  const onResetClick = () => {
    setCurrentSign(X_SIGN);
    setCells(new Array(9).fill(null));
    setWinner(null);
    setWinTripplet(new Array(3).fill(null));
  };

  return {
    currentSign,
    setCurrentSign,
    cells,
    setCells,
    winner,
    setWinner,
    winTripplet,
    setWinTripplet,
    findWinner,
    findDraw,
    onCellClick,
    onResetClick,
  };
};
