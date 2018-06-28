import Visualizer from './Visualizer.js';

export default class LapseVisualizerSink extends Visualizer {

  process(analyser, drawContext, width, height) {
    const data = new Uint8Array(analyser.frequencyBinCount * 2);
    analyser.getByteTimeDomainData(data);

    const imageData = drawContext.getImageData(1, 0, width - 1, height);
    drawContext.putImageData(imageData, 0, 0);

    // const peak = data.reduce((a, b) => a > b ? a : b);
    const peak = data.reduce((a, b) => a + b) / data.length;

    const v = peak - 128;

    const percent = (peak - 128) / 128;
    const h = height * percent * 20;
    const offset = (height - h) / 2;

    drawContext.fillRect(width - 2, offset, 1, h);

    return true;
  }
}
