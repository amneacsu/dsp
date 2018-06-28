import Visualizer from './Visualizer.js';

let i = 0;

export default class SpectrogramVisualizerSink extends Visualizer {
  process(analyser, drawContext, width, height) {
    this.offset(0, -1);

    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);

    for (let x = 0; x < width; x++) {
      // const index = ~~(this.width * (x / data.length));
      const index = ~~(x * (data.length / width));

      const p = data[index];
      const l = p / 10;

      i += 1;
      if (i % 5000 === 0) {
        // console.log(index);
        // console.log(data.length / width);
      }

      drawContext.fillStyle = `hsl(58, 29%, ${l}%)`;
      drawContext.fillRect(x, 0, 1, 1);
    }

    // return false;
    return true;
  }
}
