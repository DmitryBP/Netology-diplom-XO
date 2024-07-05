// startGame.js - для инициализации игры

import { activePlayer, board, players, setActivePlayer } from './gameState.js';
import renderBoard from './renderBoard.js';

export const startGame = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = '';
    }
  }
  setActivePlayer(players[0]);
  renderBoard(board);
};
