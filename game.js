const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
    game.font = '25px Verdana';
    game.fillStyle = 'purple';
    game.textAlign = 'right';
    game.fillText('Platzi', 25, 25);
}