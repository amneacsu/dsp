import Visualizer from './Visualizer.js';

export default class BarVisualizer extends Visualizer {
  process(analyser, drawContext, width, height) {
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);

    const barWidth = width / data.length;

    for (let f = 0; f < data.length; f++) {
      const values = data.slice(f, f + 1);
      const value = values.reduce((a, b) => a + b);

      const percent = value / 256;
      const h = height * percent;
      const offset = height - h;

      drawContext.fillRect(f * barWidth, offset, barWidth + 1, h);
    }
  }
}
