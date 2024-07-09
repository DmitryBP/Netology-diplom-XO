// gameState.js - для управления состоянием игры

import renderBoard from './renderBoard.js';

export let players = ['x', 'o'];
export let activePlayer = players[0];
export let board = [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
];
export let difficultyLevel = 'easy';

// Функция для обновления доски
export const updateBoard = (newBoard) => {
  board = newBoard;
  renderBoard(board);
};

document.addEventListener('DOMContentLoaded', () => {
  let radioButtons = document.querySelectorAll('.difficultyRadio');

  radioButtons.forEach((radio) => {
    radio.addEventListener('change', (e) => {
      difficultyLevel = e.target.value;
      if (difficultyLevel === 'easy') {
        updateBoard([
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ]);
      } else if (difficultyLevel === 'hardcore') {
        updateBoard([
          ['', '', '', ''],
          ['', '', '', ''],
          ['', '', '', ''],
          ['', '', '', ''],
        ]);
      } else {
        updateBoard([
          ['', '', '', '', ''],
          ['', '', '', '', ''],
          ['', '', '', '', ''],
          ['', '', '', '', ''],
          ['', '', '', '', ''],
        ]);
      }
    });
  });
});

export const setActivePlayer = (player) => {
  activePlayer = player;
};
export const changeActivePlayer = () => {
  activePlayer = activePlayer === players[0] ? players[1] : players[0];
};
