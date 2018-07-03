const audioContext = new window.AudioContext();

// File Source
import ElementSource from './source/ElementSource.js';
// const audioSource = new ElementSource(audioContext, './data/1.mp3');
// const audioSource = new ElementSource(audioContext, './data/2.mp3');
const audioSource = new ElementSource(audioContext, './data/3.mp4');

// Speakers
import AudioSink from './sink/AudioSink.js';
const audioSink = new AudioSink(audioContext);

// Visualizer 1
import BarVisualizerSink from './sink/BarVisualizerSink.js';
const vsink1 = new BarVisualizerSink(audioContext);

// Visualizer 2
import WaveVisualizerSink from './sink/WaveVisualizerSink.js';
const vsink2 = new WaveVisualizerSink(audioContext);

// Visualizer 3
import LapseVisualizerSink from './sink/LapseVisualizerSink.js';
const vsink3 = new LapseVisualizerSink(audioContext);

// Visualizer 4
import SpectrogramVisualizerSink from './sink/SpectrogramVisualizerSink.js';
const vsink4 = new SpectrogramVisualizerSink(audioContext);

audioSource.connect(vsink1);
audioSource.connect(vsink2);
audioSource.connect(vsink3);
audioSource.connect(vsink4);
audioSource.connect(audioSink);
