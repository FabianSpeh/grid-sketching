const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".size-btn");
const redBtn = document.querySelector("#redBtn");
const pinkBtn = document.querySelector("#pinkBtn");
const cyanBtn = document.querySelector("#cyanBtn");
const greenBtn = document.querySelector("#greenBtn");

let gridSize = 16;
let choosenColor = "red";
console.log(redBtn.style.backgroundColor);

const chooseSize = () => {
  let size = prompt("Please enter the size for your new Sketch pad (max 100)");
  if (size > 100) {
    alert("Please choose a size below 100!");
    size = 16;
  }
  return size;
};

sizeBtn.addEventListener("click", () => {
  gridSize = chooseSize();
  removeGrid();
  createGrid(gridSize);
});

redBtn.addEventListener("click", () => {
  choosenColor = "red";
});

pinkBtn.addEventListener("click", () => {
  choosenColor = "pink";
  console.log(pinkBtn.style.backgroundColor);
});

cyanBtn.addEventListener("click", () => {
  choosenColor = "darkcyan";
});

greenBtn.addEventListener("click", () => {
  choosenColor = "green";
});

const createGrid = (gridSize) => {
  for (j = 0; j < gridSize; j++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let i = 0; i < gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = choosenColor;
      });
      row.appendChild(square);
    }
  }
};

const removeGrid = () => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
};

createGrid(gridSize);
