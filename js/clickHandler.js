// clickHandler.js - для обработки кликов по доске

import { board, activePlayer, changeActivePlayer } from './gameState.js';
import showWinner from './showWinner.js';
import { transpose } from './transpose.js';
import renderBoard from './renderBoard.js';

export const click = (x, y) => {
  if (board[x][y] !== '') return;

  // Функция для проверки выигрышной комбинации
  const checkWin = (line) => {
    return line.includes('xxx') || line.includes('ooo');
  };
  board[x][y] = activePlayer;

  // Функция для получения всех диагоналей
  const getDiagonals = (board) => {
    let diagonals = [];
    let diag1 = [];
    let diag2 = [];

    // Главные диагонали
    for (let i = 0; i < board.length; i++) {
      diag1.push(board[i][i]);
      diag2.push(board[i][board.length - 1 - i]);
    }
    diagonals.push(diag1.join(''), diag2.join(''));

    // Дополнительные диагонали
    for (let k = 1; k < board.length - 2; k++) {
      let tempDiag1FromTop = [];
      let tempDiag2FromTop = [];
      let tempDiag1FromBottom = [];
      let tempDiag2FromBottom = [];

      for (let i = k, j = 0; i < board.length; i++, j++) {
        tempDiag1FromTop.push(board[j][i]);
        tempDiag2FromTop.push(board[i][j]);
      }

      for (let i = k, j = board.length - 1; i < board.length; i++, j--) {
        tempDiag1FromBottom.push(board[j][i]);
        tempDiag2FromBottom.push(board[i][j]);
      }

      diagonals.push(
        tempDiag1FromTop.join(''),
        tempDiag2FromTop.join(''),
        tempDiag1FromBottom.join(''),
        tempDiag2FromBottom.join('')
      );
    }

    // Новый цикл для диагоналей, начинающихся не с края
    for (let k = 1; k < board.length - 2; k++) {
      let tempDiag3FromLeft = [];
      let tempDiag4FromRight = [];

      for (let i = 0, j = k; j < board.length; i++, j++) {
        tempDiag3FromLeft.push(board[j][i]);
        tempDiag4FromRight.push(board[board.length - j - 1][i]);
      }

      diagonals.push(tempDiag3FromLeft.join(''), tempDiag4FromRight.join(''));
    }

    return diagonals;
  };

  const lineWin = board[x].join('');
  const rowWin = transpose(board)[y].join('');
  const diagonals = getDiagonals(board);
  const allChecks = [lineWin, rowWin, ...diagonals];

  // Проверяем выигрышные комбинации
  if (allChecks.some(checkWin)) {
    showWinner(activePlayer);
  } else {
    changeActivePlayer();
  }

  renderBoard(board);
};
