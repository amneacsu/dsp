function FileSource(context, path) {
  const source = context.createBufferSource();

  function loadSound(url, callback) {
    fetch(path).then((response) => {
      const reader = response.body.getReader();

      function tick() {
        reader.read().then((result) => {
          // console.log(result.value.toString());
          // console.log(result.value);
          // const bf = new ArrayBuffer(result.value);
          // context.decodeAudioData(bf);
          //

          const bf = new Buffer(result.value);
          // console.log(bf.toString());

          if (result.done) {
            console.log('done');
          } else {
            // tick();
          }
        });
      };

      tick();
    });
  }

  loadSound(path, (buffer) => {
    source.buffer = buffer;
    source.start();
  });

  return source;
}

module.exports = FileSource;
