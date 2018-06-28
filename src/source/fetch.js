function FileSource(context, path) {
  const source = context.createBufferSource();

  fetch(path)
    .then((response) => response.blob())
    .then((buffer) => {
      source.buffer = buffer;
      source.start();
    });

  return source;
}

export default FileSource;
