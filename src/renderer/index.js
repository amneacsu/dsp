const createCanvas = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  return canvas;
};

const defaults = {
  width: 640,
  height: 400,
};

class Node {
  constructor(renderer) {
    this.x = 10;
    this.y = 10;

    this.width = 200;
    this.height = 100;

    const canvas = createCanvas(this.width, this.height);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.hovered = false;
  }

  render() {
    this.ctx.fillColor = '#fff';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  drawOn(ctx) {
    this.render();
    ctx.drawImage(this.canvas, this.x, this.y);
  }

  onClick() {
    console.log('I got clicked oh my');
  }
}

class Renderer {
  constructor({ width, height } = defaults) {
    const canvas = createCanvas(width, height);
    document.body.appendChild(canvas);
    const context = canvas.getContext('2d');

    this.canvas = canvas;
    this.ctx = context;
    this.width = width;
    this.height = height;

    this.nodes = [];

    this.tickCount = 0;

    this.tick();

    canvas.addEventListener('click', (e) => {
      const { offsetX, offsetY } = e;

      const node = this.matchNodeCoords(offsetX, offsetY);

      node && node.onClick();
    });
  }

  matchNodeCoords(x, y) {
    return this.nodes.find((node) => {
      return x >= node.x
        && y > node.y
        && x <= node.x + node.width
        && y <= node.y + node.width;
    })
  }

  addNode() {
    const node = new Node(this);
    this.nodes.push(node);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawNode(node) {
    node.drawOn(this.ctx);
  }

  tick() {
    this.tickCount += 1;

    this.nodes.forEach((node) => this.drawNode(node));

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}

export default Renderer;
