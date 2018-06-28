class Mic {
  constructor(context) {
    const node = context.createGain();

     navigator.mediaDevices.getUserMedia({ audio: true })
      .then((foo) => {
        const micNode = context.createMediaStreamSource(foo);
        micNode.connect(node);
      });

     return node;
  }
}

export default Mic;
