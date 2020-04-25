const Gameboard = () => {
  let gameboard = Array(9).fill(0);
  return { gameboard };
};

const Player = (name) => {
  return { name };
};

x = Gameboard();
console.log(x.gameboard);

//var squares = document.getElementsByClassName('square');
//for (let i = 0; i < squares.length; i++) {
//  squares[i].textContent = i;
//}
//new game creates a gameboard(player1, player2)
//players are instances of a Player(name)
//render each element of the array in a grid
