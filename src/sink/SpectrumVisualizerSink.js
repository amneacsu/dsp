import Visualizer from './Visualizer.js';

export default class SpectrogramVisualizerSink extends Visualizer {
  process(analyser, drawContext, width, height) {
    this.clear();

    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);
    const wx = Math.log(data.length / 1);

    drawContext.beginPath();

    for (let n = 0; n < data.length; n++) {
      const x = Math.log(n) / wx * width;
      const y = data[n] * height / 256;
      drawContext.lineTo(x, height - y)
    }

    drawContext.stroke();

    return true;
  }
}


