const grid = document.querySelector(".grid");

const blockHeight = 20;
const blockWidth = 100;

class Block {
  constructor(x, y) {
    (this.bottomLeft = [x, y]),
      (this.topLeft = [x, y + blockHeight]),
      (this.bottomRight = [x + blockWidth, y]),
      (this.topRight = [x + blockWidth, y + blockHeight]);
  }
}

const blocks = [
  new Block(10, 270),
  new Block(10, 240),
  new Block(10, 210),
  new Block(120, 270),
  new Block(120, 240),
  new Block(120, 210),
  new Block(230, 270),
  new Block(230, 240),
  new Block(230, 210),
  new Block(340, 270),
  new Block(340, 240),
  new Block(340, 210),
  new Block(450, 270),
  new Block(450, 240),
  new Block(450, 210),
];

function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

function drawUser() {
  const userBlock = document.createElement("div");
  userBlock.classList.add("user");
  grid.appendChild("user");
}

function drawBall() {
  const ball = document.createElement("div");
  ball.classList.add("ball");
  grid.appendChild("ball");
}

addBlocks();
