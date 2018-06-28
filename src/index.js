import MicSource from './source/mic.js';

import AudioSink from './sink/Audio.js';
import BarVisualizerSink from './sink/BarVisualizer.js';
import WaveVisualizerSink from './sink/WaveVisualizer.js';

import ElementSource from './source/element.js';

const audioContext = new window.AudioContext();

const vsink0 = new BarVisualizerSink(audioContext, {
  label: 'file source',
});

const vsink1 = new WaveVisualizerSink(audioContext, {
  label: 'file source',
});

const audioSink = new AudioSink(audioContext);

const audioSource = new ElementSource(audioContext, {
  src: 'data/2.mp3',
});

audioSource.connect(vsink0);
audioSource.connect(vsink1);
audioSource.connect(audioSink);

// MicSource
const micVis1 = new BarVisualizerSink(audioContext, {
  label: 'mic source',
});

const micVis2 = new WaveVisualizerSink(audioContext, {
  label: 'mic source',
});

const mic = new MicSource(audioContext);

mic.connect(micVis1);
mic.connect(micVis2);

