import ElementSource from './source/ElementSource.js';

import AudioSink from './sink/AudioSink.js';
import BarVisualizerSink from './sink/BarVisualizerSink.js';
import LapseVisualizerSink from './sink/LapseVisualizerSink.js';
import WaveVisualizerSink from './sink/WaveVisualizerSink.js';

const audioContext = new window.AudioContext();
const audioSource = new ElementSource(audioContext, 'data/1.mp3');
const audioSink = new AudioSink(audioContext);

const vsink0 = new BarVisualizerSink(audioContext);
const vsink1 = new WaveVisualizerSink(audioContext);
const vsink2 = new LapseVisualizerSink(audioContext);

audioSource.connect(vsink0);
audioSource.connect(vsink1);
audioSource.connect(vsink2);
audioSource.connect(audioSink);

