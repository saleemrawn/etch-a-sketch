const container = document.querySelector(".container");

function createGrid(amount) {
  createRows(amount);
  createSquares(amount);
}

function createRows(amount) {
  for (i = 1; i <= amount; i++) {
    container.insertAdjacentHTML("beforeend", "<div class='row'></div>");
  }
}

function createSquares(amount) {
  const rows = document.querySelectorAll(".row");
  rows.forEach(row => {
    for (j = 1; j <= amount; j++) {
      row.insertAdjacentHTML("beforeend", "<div class='square'></div>");
    }
  });
}

function applyGridHover() {
  const squares = document.querySelectorAll(".square");

  squares.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
    });
  });
}

createGrid(16);
applyGridHover();
