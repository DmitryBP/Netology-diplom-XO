// gameState.js - для управления состоянием игры

export let players = ['x', 'o'];
export let activePlayer = players[0];
// export let activePlayer = prompt('Выбери игрока ', 'x')

export let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
export const setActivePlayer = (player) => {
  activePlayer = player;
};
export const changeActivePlayer = () => {
  activePlayer = activePlayer === players[0] ? players[1] : players[0];
};
