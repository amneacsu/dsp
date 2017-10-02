export default class OscillatorSource {
  constructor(context, params = {}) {
    const {
      type = 'square',
      frequency = 440,
    } = params;

    const node = context.createOscillator();

    // node.type = type;
    node.frequency.setValueAtTime(frequency, context.currentTime); // value in hertz

    node.start();

    // let f = frequency;

    // setInterval(() => {
    //   f++;
    //   node.frequency.setValueAtTime(f, context.currentTime)
    // }, 2);

    return node;
  }
}
