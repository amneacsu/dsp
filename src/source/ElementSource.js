export default class ElementSource {
  constructor(context, options = {}) {
    const {
      src,
      loop = false,
    } = options;

    const element = document.createElement('audio');

    element.crossOrigin = 'anonymous';
    element.controls = true;
    element.loop = loop;
    element.src = src;
    element.play();

    document.body.appendChild(element);

    return context.createMediaElementSource(element);
  }
}
