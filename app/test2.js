const stream = require('stream');

const SdrSource = require('./source/sdr');
const SoxSink = require('./sink/sox');

const ts = new stream.Transform({
  transform(chunk, enc, next) {
    const nb = chunk.map(s => s - 127.5);
    this.push(nb);

    next();
  },
});

const ts2 = new stream.Transform({
  transform(chunk, enc, next) {
    console.log(chunk.length);
    const nb = Buffer.alloc(chunk.length / 2);

    for (let si = 0; si < chunk.length / 2; si += 1) {
      const [i, q] = chunk.slice(si * 2, si * 2 + 2);

      console.log('write', i);
      nb.writeInt8(i, si);
    }

    this.push(nb);

    next();
  },
});

const src = new SdrSource();
const sink = new SoxSink();

src.stream.pipe(ts).pipe(ts2).pipe(sink.stdin);
