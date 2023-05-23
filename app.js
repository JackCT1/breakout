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

const blocks = [new Block(150, 10)];

function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

addBlocks();
