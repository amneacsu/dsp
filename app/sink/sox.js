const child_process = require('child_process');

function SoxSink() {
  const ps = child_process.spawn('play', [
    '-r24k',
    '-traw',
    '-es',
    '-b16',
    '-c1',
    '-V1',
    '-',
  ]);

  this.stdin = ps.stdin;
};

module.exports = SoxSink;
