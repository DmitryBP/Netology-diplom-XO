// clickHandler.js - для обработки кликов по доске

import { board, activePlayer, changeActivePlayer, players } from './gameState.js';
import showWinner from './showWinner.js';
import { transpose } from './transpose.js';
import renderBoard from './renderBoard.js';

export const click = (x, y) => {
  if (board[x][y] !== '') return;

  board[x][y] = activePlayer;

  let leftCros = '';
  let rightCros = '';

  for (let i = 0; i < board.length; i++) {
    leftCros += board[i][i];
    rightCros += board[i][board.length - 1 - i];
  }
  const lineWin = board[x].join('');
  const rowWin = transpose(board)[y].join('');
  const winCombo = activePlayer === players[0] ? 'xxx' : 'ooo';
  const wins = [lineWin, rowWin, leftCros, rightCros];

  if (wins.some((el) => el === winCombo)) {
    showWinner(activePlayer);
  } else {
    changeActivePlayer();
  }

  renderBoard(board);
};
