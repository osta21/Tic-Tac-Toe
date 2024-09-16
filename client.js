const socket = io();

const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
    const cell = e.target;
    cell.textContent = currentPlayer;
    const index = Array.from(cells).indexOf(cell);
    socket.emit('move', { player: currentPlayer, index });

    if (checkWin(currentPlayer)) {
        alert(`${currentPlayer} gagne!`);
        restartGame();
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

socket.on('move', (data) => {
    cells[data.index].textContent = data.player;
});

function checkWin(player) {
    // Même logique de vérification
}

function restartGame() {
    // Même logique de redémarrage
}