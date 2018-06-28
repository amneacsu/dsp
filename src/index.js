import ElementSource from './source/ElementSource.js';

import AudioSink from './sink/AudioSink.js';
import BarVisualizerSink from './sink/BarVisualizerSink.js';
import BarCenterVisualizerSink from './sink/BarCenterVisualizerSink.js';
import WaveVisualizerSink from './sink/WaveVisualizerSink.js';

const audioContext = new window.AudioContext();
const audioSource = new ElementSource(audioContext, 'data/2.mp3');
const audioSink = new AudioSink(audioContext);

const vsink0 = new BarVisualizerSink(audioContext, {
  label: 'file source',
});

const vsink3 = new BarCenterVisualizerSink(audioContext, {
  label: 'file source',
});

const vsink1 = new WaveVisualizerSink(audioContext, {
  label: 'file source',
});

audioSource.connect(vsink0);
audioSource.connect(vsink1);
audioSource.connect(vsink3);
audioSource.connect(audioSink);
