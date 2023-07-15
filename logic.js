let popup = document.querySelector(".popup");
let turn = "X";
let winnerName = document.getElementById("winnerName");
let squares = [];

// another solution
function winner(num) {
  winnerName.innerHTML = `${squares[num]}  == Winner`;
  popup.classList.remove("hide");
}

function win() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    // winnerName.innerHTML = `${squares[1]} Winner`;
    // popup.classList.remove("hide");
    winner(1);
  }
  if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    // winnerName.innerHTML = `${squares[4]} Winner`;
    // popup.classList.remove("hide");
    winner(4);
  }
  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    // winnerName.innerHTML = `${squares[5]} Winner`;
    // popup.classList.remove("hide");
    winner(7);
  }
  if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    // winnerName.innerHTML = `${squares[1]} Winner`;
    // popup.classList.remove("hide");
    winner(1);
  }
  if (
    squares[5] == squares[2] &&
    squares[2] == squares[8] &&
    squares[5] != ""
  ) {
    // winnerName.innerHTML = `${squares[2]} Winner`;
    // popup.classList.remove("hide");
    winner(5);
  }
  if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    // winnerName.innerHTML = `${squares[3]} Winner`;
    // popup.classList.remove("hide");
    winner(3);
  }
  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    // winnerName.innerHTML = `${squares[1]} Winner`;
    // popup.classList.remove("hide");
    winner(1);
  }
  if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    // winnerName.innerHTML = `${squares[3]} Winner`;
    // popup.classList.remove("hide");
    winner(3);
  }
}
function game(id) {
  let item = document.getElementById(id);
  if (turn === "X" && item.innerHTML == "") {
    item.innerHTML = "X";
    turn = "O";
  } else {
    item.innerHTML = "O";
    turn = "X";
  }
  win();
}
function newGame() {
  location.reload();
}
