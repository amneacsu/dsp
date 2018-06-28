import Visualizer from './Visualizer.js';

const add = (a, b) => a + b;

export default class BarCenterVisualizerSink extends Visualizer {
  process(analyser, drawContext, width, height) {
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);

    const barWidth = width / data.length;

    for (let f = 0; f < data.length; f++) {
      const values = data.slice(f, f + 1);
      const value = values.reduce(add);

      const percent = value / 256;
      const h = height * percent / 2;
      const offset = (height -h ) / 2;

      drawContext.fillRect(f * barWidth, offset, barWidth + 1, h);
    }
  }
}
