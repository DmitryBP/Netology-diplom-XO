// startGame.js - для инициализации игры

import { board, players, setActivePlayer } from './gameState.js';
import renderBoard from './renderBoard.js';
import { buttonResWrapper } from './ui.js';
// import { startPlayer } from './ui.js';

export const startGame = () => {
  let modalStartEl = document.querySelector('.startModal');
  let choosPlayerBtn = document.getElementsByClassName('player');
  // let buttonResWrapper = document.querySelector('.panel');

  modalStartEl.classList.remove('hidden');
  buttonResWrapper.classList.add('hidden');

  for (let btn of choosPlayerBtn) {
    btn.addEventListener('click', () => {
      if (btn.textContent == 'x') {
        setActivePlayer('x');
      } else {
        setActivePlayer('o');
      }
      modalStartEl.classList.add('hidden');
      buttonResWrapper.classList.remove('hidden');
    });

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j] = '';
      }
    }
  }

  renderBoard(board);
};
