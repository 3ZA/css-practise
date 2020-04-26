const Gameboard = () => {
  let gameboard = Array(9).fill(0);
  return { gameboard };
};

const Player = (name) => {
  return { name };
};

var currentBoard;
var grid = document.getElementById('grid');
var gameboard = [].slice.call(grid.querySelectorAll('.square'), 0);

var moves = ['X', 'O'];
moveToNum = new Map([
  ['X', -1],
  ['O', 1],
]);
curr = 0;
grid.addEventListener('click', playMove);
function playMove(e) {
  var index = gameboard.indexOf(e.target);
  divIndex = index + 1;
  var square = document.querySelector(
    `.square:nth-child(n + ${divIndex}):nth-child(n - ${divIndex})`
  );
  if (currentBoard.gameboard[index] !== 0) {
    return;
  }
  currentBoard.gameboard[index] = moveToNum.get(moves[curr]);
  square.textContent = moves[curr];
  checkBoard();
  curr = 1 - curr;
}

function startGame() {
  console.log('new game started');
  currentBoard = Gameboard();
  var squares = Array.from(document.getElementsByClassName('square')).forEach(
    (item) => {
      item.textContent = '';
    }
  );
}

function checkBoard() {
  board = currentBoard.gameboard;
}
startGame();
