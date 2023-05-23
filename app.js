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

function addBlocks() {}
