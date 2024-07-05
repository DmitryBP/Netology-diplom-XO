import { buttonResWrapper, modalEl } from './ui.js';

export default function showWinner(winner) {
  let header = modalEl.getElementsByTagName('h2')[0];
  header.textContent = `🍾 ${
    winner === 'x' ? 'Крестики победили!' : 'Нолики победили!'
  } 🍾`;
  modalEl.classList.remove('hidden');
  buttonResWrapper.classList.add('hidden');
}
