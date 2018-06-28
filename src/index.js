import FileSource from './source/file.js';
import MicSource from './source/mic.js';

import AudioSink from './sink/audio.js';
import BarVisualizerSink from './sink/bar-visualizer.js';
import WaveVisualizerSink from './sink/wave-visualizer.js';

import ElementSource from './source/element.js';

const audioContext = new window.AudioContext();

const vsink0 = new BarVisualizerSink(audioContext, {
  label: 'File source',
});

const vsink1 = new WaveVisualizerSink(audioContext, {
  label: 'File source',
});

const audioSink = new AudioSink(audioContext);
const audioSource = new FileSource(audioContext, 'data/1.mp3');

// FileSource

audioSource.connect(vsink0);
audioSource.connect(vsink1);
audioSource.connect(audioSink);

// MicSource
const micVis1 = new BarVisualizerSink(audioContext, {
  label: 'Mic source',
});

const micVis2 = new WaveVisualizerSink(audioContext, {
  label: 'Mic source',
});

const mic = new MicSource(audioContext);

mic.connect(micVis1);
mic.connect(micVis2);


// ElementSource

const e = new ElementSource(audioContext, {
  src: 'data/1.mp3',
});

const vis21 = new BarVisualizerSink(audioContext, {
  label: 'Audio element source',
});

e.connect(vis21);
