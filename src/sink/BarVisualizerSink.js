import Visualizer from './Visualizer.js';

const add = (a, b) => a + b;

export default class BarVisualizerSink extends Visualizer {
  process(analyser, drawContext, width, height) {
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);

    const barWidth = width / data.length;

    for (let f = 0; f < data.length; f++) {
      const values = data.slice(f, f + 1);
      const value = values.reduce(add);

      const percent = value / 256;
      const h = height * percent;
      const offset = height - h;

      drawContext.fillRect(f * barWidth, offset, barWidth + 1, h);
    }
  }
}
