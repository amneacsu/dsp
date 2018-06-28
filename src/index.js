import FileSource from './source/file.js';
import AudioSink from './sink/audio.js';
import BarVisualizerSink from './sink/bar-visualizer.js';
import WaveVisualizerSink from './sink/wave-visualizer.js';
import LowPassFilter from './filter/low-pass.js';

const audioContext = new window.AudioContext();

const vsink0 = new BarVisualizerSink(audioContext, {
  width: 400,
  height: 128,
  scale: 6,
});
const vsink1 = new WaveVisualizerSink(audioContext);

const audioSink = new AudioSink(audioContext);
const audioSource = new FileSource(audioContext, 'data/1.mp3');
const lowPassFilter = new LowPassFilter(audioContext, 10000);

audioSource.connect(lowPassFilter);

lowPassFilter.connect(vsink0);
lowPassFilter.connect(vsink1);
lowPassFilter.connect(audioSink);
