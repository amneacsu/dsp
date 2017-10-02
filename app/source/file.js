function FileSource(context, path) {
  const source = context.createBufferSource();

  function loadSound(url, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
      context.decodeAudioData(request.response, callback);
    }

    request.send();
  }

  loadSound(path, (buffer) => {
    source.buffer = buffer;
    source.start();
  });

  return source;
}

module.exports = FileSource;
