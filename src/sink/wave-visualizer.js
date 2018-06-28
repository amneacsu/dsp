const drawContext = (width, height) => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  context.lineWidth = 1;
  context.strokeStyle = '#3D3B1A';
  context.fillStyle = '#3D3B1A';
  context.font = '12px monospace';
  context.textAlign = 'right';

  return context;
}

function WaveVisualizerSink(context, {
  width = 400,
  height = 128,
  fftSize = 2048,
  label = '',
} = {}) {
  this.WIDTH = width;
  this.HEIGHT = height;
  this.label = label;

  this.drawContext = drawContext(width, height);
  this.analyser = context.createAnalyser();
  this.analyser.fftSize = fftSize;
  this.sliceWidth = width / fftSize;
  this.data = new Uint8Array(fftSize);

  this.tick();

  return this.analyser;
}

WaveVisualizerSink.prototype.tick = function() {
  this.analyser.getByteTimeDomainData(this.data);
  this.drawContext.clearRect(0, 0, this.WIDTH, this.HEIGHT);
  this.drawContext.fillText(this.label, this.WIDTH - 4, 11);

  this.drawContext.beginPath();

  let x = 0;

  for (let i = 0; i < this.analyser.fftSize; i++) {
    const v = this.data[i] / 128.0;
    const y = v * this.HEIGHT / 2;

    if (i === 0) {
      this.drawContext.moveTo(x, y);
    } else {
      this.drawContext.lineTo(x, y);
    }

    x += this.sliceWidth;
  }

  this.drawContext.lineTo(this.width, this.height / 2);
  this.drawContext.stroke();

  window.requestAnimationFrame(() => {
    this.tick();
  });
};

export default WaveVisualizerSink;
