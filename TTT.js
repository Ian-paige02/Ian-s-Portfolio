const board = document.getElementById('board');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameActive = true;
let cells = Array(9).fill(null);

// Winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Create the board
function createBoard() {
  board.innerHTML = '';
  cells = Array(9).fill(null);
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', handleClick);
    board.appendChild(cell);
  }
  currentPlayer = 'X';
  statusText.textContent = "Player X's Turn";
  gameActive = true;
}

// Handle cell click
function handleClick(e) {
  const index = e.target.dataset.index;

  if (!gameActive || cells[index]) return;

  cells[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWin()) {
    statusText.textContent = `Player ${currentPlayer} Wins!`;
    gameActive = false;
  } else if (cells.every(cell => cell)) {
    statusText.textContent = `It's a Draw!`;
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
  }
}

// Check win condition
function checkWin() {
  return winningCombinations.some(combo => {
    return combo.every(index => cells[index] === currentPlayer);
  });
}

// Reset game
resetButton.addEventListener('click', createBoard);

// Initialize
createBoard();


// === Fireworks Animation ===
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
let fireworks = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createFirework(x, y) {
  for (let i = 0; i < 30; i++) {
    fireworks.push({
      x,
      y,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 5 + 2,
      radius: Math.random() * 2 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      alpha: 1
    });
  }
}

function updateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((fw, index) => {
    fw.x += Math.cos(fw.angle) * fw.speed;
    fw.y += Math.sin(fw.angle) * fw.speed;
    fw.alpha -= 0.02;

    ctx.beginPath();
    ctx.arc(fw.x, fw.y, fw.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${hexToRgb(fw.color)}, ${fw.alpha})`;
    ctx.fill();

    if (fw.alpha <= 0) {
      fireworks.splice(index, 1);
    }
  });
  requestAnimationFrame(updateFireworks);
}

function hexToRgb(h) {
  const temp = document.createElement("div");
  temp.style.color = h;
  document.body.appendChild(temp);
  const rgb = window.getComputedStyle(temp).color;
  document.body.removeChild(temp);
  return rgb.match(/\d+/g).slice(0, 3).join(",");
}
updateFireworks();
