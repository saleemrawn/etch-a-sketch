const gridButton = document.querySelector(".new-grid-bttn");

gridButton.addEventListener("click", () => {
  createGrid();
});

function createGrid() {
  const container = document.querySelector(".container");
  let gridSize = getUserGridSize();

  if (gridSize >= 100) {
    alert("Please choose a length less than 100.");
    return;
  }

  container.innerHTML = "";

  createRows(gridSize);
  createSquares(gridSize);
  applyGridHover();
}

function createRows(amount) {
  const container = document.querySelector(".container");

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

function getUserGridSize() {
  let gridSize = prompt("How many squares?");
  return gridSize;
}

function applyGridHover() {
  const squares = document.querySelectorAll(".square");

  squares.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomRGB();
    });
  });
}

function getRandomRGB() {
  return `rgb(${getRandomArbitrary(0, 256)}, ${getRandomArbitrary(0, 256)}, ${getRandomArbitrary(0, 256)})`;
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
