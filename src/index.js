import FileSource from './source/file.js';
import MicSource from './source/mic.js';

import AudioSink from './sink/audio.js';
import BarVisualizerSink from './sink/bar-visualizer.js';
import WaveVisualizerSink from './sink/wave-visualizer.js';
import LowPassFilter from './filter/low-pass.js';

const audioContext = new window.AudioContext();

const vsink0 = new BarVisualizerSink(audioContext, {
  label: 'File source, low pass filter',
});

const vsink1 = new WaveVisualizerSink(audioContext, {
  label: 'File source, low pass filter',
});

const audioSink = new AudioSink(audioContext);
const audioSource = new FileSource(audioContext, 'data/1.mp3');
const lowPassFilter = new LowPassFilter(audioContext, 10000);


// mic.connect(lowPassFilter);
audioSource.connect(lowPassFilter);

lowPassFilter.connect(vsink0);
lowPassFilter.connect(vsink1);
lowPassFilter.connect(audioSink);


const micVis1 = new BarVisualizerSink(audioContext, {
  label: 'Mic source',
});

const micVis2 = new WaveVisualizerSink(audioContext, {
  label: 'Mic source',
});

const mic = new MicSource(audioContext);

mic.connect(micVis1);
mic.connect(micVis2);
