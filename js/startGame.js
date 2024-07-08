// startGame.js - для инициализации игры

import { board, players, setActivePlayer } from './gameState.js';
import renderBoard from './renderBoard.js';
import { buttonResWrapper } from './ui.js';

export const startGame = () => {
  let modalStartEl = document.querySelector('.startModal');
  let choosPlayerBtn = document.getElementsByClassName('player');

  modalStartEl.classList.remove('hidden');
  buttonResWrapper.classList.add('hidden');

  // Очищаем доску
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = '';
    }
  }
  renderBoard(board);
  
  // Выбор активного игрока
  for (let btn of choosPlayerBtn) {
    btn.addEventListener('click', () => {
      setActivePlayer(btn.textContent);
      modalStartEl.classList.add('hidden');
      buttonResWrapper.classList.remove('hidden');
    });
  }
};
