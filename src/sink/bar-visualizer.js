const drawContext = (width, height) => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  context.fillStyle = '#3D3B1A';

  return context;
}

const add = (a, b) => {
  return a + b;
}

function BarVisualizerSink(context, {
  width = 400,
  height = 128,
  scale = 1,
} = {}) {
  this.WIDTH = width;
  this.HEIGHT = height;
  this.scale = scale;

  this.drawContext = drawContext(width, height);
  this.analyser = context.createAnalyser();
  this.freqDomain = new Uint8Array(this.analyser.frequencyBinCount);

  this.tick();

  return this.analyser;
}

BarVisualizerSink.prototype.tick = function() {
  this.analyser.getByteFrequencyData(this.freqDomain);
  this.drawContext.clearRect(0, 0, this.WIDTH, this.HEIGHT);

  const scale = this.scale;
  const barWidth = (this.WIDTH / this.freqDomain.length) * scale;

  for (let f = 0; f < this.freqDomain.length / scale; f++) {
    const values = this.freqDomain.slice(f * scale, (f + 1) * scale);
    const value = values.reduce(add) / scale;

    const percent = value / 256;
    const height = this.HEIGHT * percent;
    const offset = this.HEIGHT - height;

    this.drawContext.fillRect(f * barWidth, offset, barWidth + 1, height);
  }

  window.requestAnimationFrame(() => {
    this.tick();
  });
};

export default BarVisualizerSink;
