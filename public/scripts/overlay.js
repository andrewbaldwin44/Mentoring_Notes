const generalButton = document.querySelector('#general-button');
const overlay = document.querySelector('#overlay');

generalButton.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

window.onclick = ({ target }) => {
  if (target.classList.contains('overlay')) overlay.style.display = 'none';
}
