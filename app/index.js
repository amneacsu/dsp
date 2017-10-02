// const FileSource = require('./source/file');
const FileSource = require('./source/fetch');
const SdrSource = require('./source/sdr');
const AudioSink = require('./sink/audio');
const BarVisualizerSink = require('./sink/bar-visualizer');
const WaveVisualizerSink = require('./sink/wave-visualizer');
const LowPassFilter = require('./filter/low-pass');

const audioContext = new window.AudioContext();

const vsink0 = new BarVisualizerSink(audioContext);
const vsink1 = new WaveVisualizerSink(audioContext);

const audioSink = new AudioSink(audioContext);
// const audioSource = new FileSource(audioContext, 'data/1.mp3');
const audioSource = new FileSource(audioContext, 'http://ice1.somafm.com/defcon-128-mp3');
const lowPassFilter = new LowPassFilter(audioContext, 10000);

audioSource.connect(vsink0);
audioSource.connect(vsink1);
audioSource.connect(audioSink);
